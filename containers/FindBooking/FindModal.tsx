import Button from "@/components/Button/Button";
import {
  CloseButton,
  Flex,
  Modal,
  NumberInput,
  Text,
  Title,
} from "@mantine/core";
import React, { useEffect } from "react";
import { database } from "@/firebase";
import {
  ref,
  get,
  child,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
interface BookingModalProps {
  opened: boolean;
  open: () => void;
  close: () => void;
}

const FindModal = ({ opened, open, close }: BookingModalProps) => {
  const [bookingId, setBookingId] = React.useState<number | "">();
  const [stage, setStage] = React.useState<1 | 2>(1);
  const [booking, setBooking] = React.useState<any>(null);

  const handleSubmit = async () => {
    if (bookingId) {
      try {
        const usersRef = query(
          ref(database, `bookings`),
          ...[orderByChild("bId"), equalTo(bookingId)]
        );
        const snapshot = await get(usersRef);
        const data = snapshot.val();
        const dataKey = Object.keys(data)[0];
        console.debug(
          `JSC ~ file: FindModal.tsx:29 ~ handleSubmit ~ data:`,
          data[dataKey]
        );
        setBooking(data[dataKey]);
        setStage(2);
      } catch (error) {
        alert(error);
        return;
      }
    }
  };
  useEffect(() => {
    return () => {
      setStage(1);
    };
  }, []);

  const stageOne = () => {
    return (
      <>
        <Text fz={"md"}>
          Your Booking Id is an unique, ten-digit identifier for your booking.
          It is given to you after your booking.
        </Text>
        <form onSubmit={handleSubmit}>
          <NumberInput
            value={bookingId}
            onChange={setBookingId}
            hideControls
            label="Booking Id"
            withAsterisk
            mt="md"
            width={"100%"}
            mb="md"
          />
          <Button cartoon type="submit" onClick={handleSubmit}>
            Find Booking
          </Button>
        </form>
      </>
    );
  };
  const stageTwo = () => {
    return (
      <>
        <div className="grid lg:grid-cols-2 grow gap-x-2 gap-y-2">
          <Title order={1} className="lg:col-span-2">
            {booking?.name}
          </Title>
          <Text fz={"lg"}>{booking?.age} years</Text>{" "}
          <Text fz="lg">
            +91 {booking?.tel} {booking?.email && `| ${booking?.email}`}
          </Text>
          <Text fz="md">{booking?.fName}</Text>{" "}
          <Text fz="md">{booking?.mName}</Text>
          <Text fz="lg" className="lg:col-span-2">
            Booking Id: {bookingId}
          </Text>
        </div>
        <Flex mt="lg" justify={"flex-end"} gap={"md"}>
          <Button
            onClick={() => {
              close();
              setStage(1);
            }}
          >
            {" "}
            Close
          </Button>
        </Flex>
      </>
    );
  };

  return (
    <Modal opened={opened} onClose={close} withCloseButton={false} centered>
      <Modal.Header>
        <Modal.Title>
          <Title order={2}>{stage === 1 ? "Find" : "Your"} Booking</Title>
        </Modal.Title>
        <Modal.CloseButton
          onClick={() => {
            setStage(1);
            close();
          }}
        />
      </Modal.Header>
      <Modal.Body>{stage === 1 ? stageOne() : stageTwo()}</Modal.Body>
    </Modal>
  );
};

export default FindModal;
