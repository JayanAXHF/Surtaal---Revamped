import React, { useEffect, useRef, useState } from "react";
import { Alert, Flex, Notification, rem, Text } from "@mantine/core";
import {
  Autocomplete,
  Modal as Dialog,
  Group,
  Loader,
  NumberInput,
  ScrollArea,
  Select,
  TextInput,
  Title,
} from "@mantine/core";
import { customAlphabet } from "nanoid";
import { list } from "@/app/courses/page";
import Button from "@/components/Button/Button";
import { nanoid as Id } from "nanoid";
import { database as db } from "../../firebase";
import { ref, set } from "firebase/database";
import { IconX } from "@tabler/icons-react";

const nanoid = customAlphabet("1234567890", 10);
interface Course {
  desc: string;
  name: string;
  price: number;
}

interface BookingModalProps {
  opened: boolean;
  open: () => void;
  close: () => void;
  course?: Course;
}

interface FormData {
  name: string;
  fname?: string;
  mname?: string;
  email: string;
  tel: number;
  age: number;
  gender: "Male" | "Female" | "Non-Binary";
  grade?: string;
  school?: string;
  course: string;
  location: "Offline" | "Online";
  instrument: boolean;
}

const Modal = ({ opened, open, close, course }: BookingModalProps) => {
  const [formData, setFormData] = useState<FormData>();
  const [bookingId, setBookingId] = useState<number>();
  const timeoutRef = useRef<number>(-1);
  const [stage, setStage] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const [alertInfo, setAlertInfo] = useState({ show: false, message: "" });

  useEffect(() => {
    if (localStorage.getItem("bookingId")) {
      setStage(2);
      setBookingId(Number(localStorage.getItem("bookingId")));
    }
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value } as FormData;
    });
  };

  const handleEmailChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setFormData((prevState) => {
      return { ...prevState, email: val } as FormData;
    });
    setData([]);

    if (val.trim().length === 0 || val.includes("@")) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(
          ["gmail.com", "outlook.com", "yahoo.com"].map(
            (provider) => `${val}@${provider}`
          )
        );
      }, 1000);
    }
  };

  const handleSubmit = async () => {
    const telRegex = /^[6789]\d{9}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const date = new Date();
    const id = Id();
    console.log(course);
    setBookingId(Number(nanoid()));
    if (
      !formData?.tel ||
      !formData?.email ||
      !formData?.age ||
      !formData?.name ||
      !formData?.course
    ) {
      setAlertInfo({ show: true, message: "Please Fill The Required Fields" });
      return;
    }

    if (!formData?.tel.toString().match(telRegex)) {
      setAlertInfo({
        show: true,
        message: "Invalid Phone Number; Enter a Valid Phone Number",
      });
      return null;
    }
    if (!formData.email.match(emailRegex)) {
      setAlertInfo({
        show: true,
        message: "Invalid Email; Enter a Valid Email",
      });
      return null;
    }

    try {
      if (formData && bookingId) {
        await set(ref(db, `bookings/${id}`), {
          ...formData,
          date,
          bId: bookingId,
        });
        setStage(2);
        localStorage.setItem("bookingId", bookingId.toString());
      }
    } catch (error) {
      console.error(error);
    }
  };
  const stageOne = () => {
    return (
      <>
        {alertInfo.show && (
          <Alert icon={<IconX size="1.1rem" />} color="red">
            {alertInfo.message}
          </Alert>
        )}

        <form className="grid w-full lg:grid-cols-2 gap-x-3 gap-y-2">
          <>
            <TextInput
              withAsterisk
              label="Full Name"
              placeholder="Enter your name"
              name="name"
              className="lg:col-span-2"
              value={formData?.name}
              onChange={handleChange}
              required
            />
            <Autocomplete
              value={formData?.email}
              data={data}
              onChange={handleEmailChange}
              rightSection={loading ? <Loader size="1rem" /> : null}
              label="E-Mail Address"
              placeholder="Your email"
              className="lg:col-span-2"
              withAsterisk
              name="email"
              required
            />
            <NumberInput
              withAsterisk
              hideControls
              label="Mobile Number"
              value={formData?.tel}
              onChange={(value) => {
                setFormData((prevState) => {
                  return { ...prevState, tel: value } as FormData;
                });
              }}
              className="lg:col-span-2"
              name="tel"
              maxLength={10}
              required
            />
            <TextInput
              label="Father/Husband's Name"
              value={formData?.fname}
              onChange={handleChange}
              name="fname"
            />
            <TextInput
              label="Mother/Wife's Name"
              value={formData?.mname}
              onChange={handleChange}
              name="mname"
            />
            <NumberInput
              value={formData?.age}
              onChange={(value) => {
                setFormData((prevState) => {
                  return { ...prevState, age: value } as FormData;
                });
              }}
              label="Age"
              name="age"
              required
              withAsterisk
            />
            <Select
              data={["Male", "Female", "Non-Binary"]}
              value={formData?.gender}
              onChange={(val) => {
                setFormData((prevState) => {
                  return { ...prevState, gender: val } as FormData;
                });
              }}
              label="Gender"
              name="gender"
              withAsterisk
              required
            />
            <TextInput
              value={formData?.grade}
              onChange={handleChange}
              label="Grade"
              name="grade"
            />
            <TextInput
              value={formData?.school}
              onChange={handleChange}
              label="School"
              name="school"
            />
            <Select
              withAsterisk
              data={list.map((course) => {
                return course.name;
              })}
              label="Course"
              placeholder={!course ? "Pick the course" : undefined}
              defaultValue={course && course.name}
              value={formData?.course}
              onChange={(val) => {
                setFormData((prevState) => {
                  return { ...prevState, course: val } as FormData;
                });
              }}
              name="course"
              required
            />
            <Select
              withAsterisk
              data={["Offline", "Online"]}
              value={formData?.location}
              onChange={(val) => {
                setFormData((prevState) => {
                  return { ...prevState, location: val } as FormData;
                });
              }}
              required
              label="Location"
            />
          </>
        </form>

        <Flex mt="lg" className=" " justify={"flex-end"} gap={"md"}>
          <Button onClick={close}> Cancel</Button>
          <Button cartoon type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Flex>
      </>
    );
  };

  const stageTwo = (
    <div>
      <div className="grid h-96 p-10 justify-center items-center ">
        <Title order={1} className="text-center ">
          Booking Id:
          <br /> <Title size={rem(50)}>{bookingId}</Title>
        </Title>
      </div>
      <Flex justify={"flex-end"} mt="lg">
        <Button
          onClick={() => {
            close();
          }}
        >
          Close
        </Button>
      </Flex>
    </div>
  );

  return (
    <Dialog
      opened={opened}
      onClose={close}
      withCloseButton={false}
      centered
      scrollAreaComponent={ScrollArea.Autosize}
      className=""
    >
      <Dialog.Header>
        <Dialog.Title>
          <Title order={2}>
            {stage === 1 ? "Book your classes!" : "Class Booked!"}
          </Title>
        </Dialog.Title>
        <Dialog.CloseButton />
      </Dialog.Header>
      <Dialog.Body className="mt-1 ">
        {stage === 1 ? stageOne() : stageTwo}
      </Dialog.Body>
    </Dialog>
  );
};

export default Modal;
