import { Modal, Title, Text, Grid } from "@mantine/core";
import React from "react";
import Button from "../Button/Button";
import BookingModal from "@/containers/BookingModal/Modal";
import { useDisclosure } from "@mantine/hooks";

interface CardProps {
  title: string;
  description: string;
  small: boolean;
  course?: {
    desc: string;
    name: string;
    price: number;
  };
}

const Card = ({ title, course, description, small, ...props }: CardProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [readMore, { open: openReadMore, close: closeReadMore }] =
    useDisclosure(false);
  return (
    <div className={`p-5 ${small && "h-max w-auto"} h-max`}>
      <BookingModal opened={opened} close={close} open={open} course={course} />
      <ReadMoreModal
        opened={readMore}
        close={closeReadMore}
        open={openReadMore}
        name={title}
        description={description}
        price={course?.price as number}
      ></ReadMoreModal>
      <div className="group relative block  h-56 sm:h-80 lg:h-96 w-auto cursor-pointer ">
        <span className="absolute inset-0 border-2 border-dashed border-black dark:border-white"></span>

        <div className="relative flex h-full overflow-auto transform items-end border-2 border-black bg-white dark:border-white dark:bg-[#0a0a0a] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <Title order={1} className="mt-4    font-medium">
              {title}
            </Title>
          </div>

          <div className="absolute overflow-auto !h-max p-4 mt-5 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 pt-5">
            <Title order={2} className="mt-4 font-medium ">
              {title}
            </Title>

            <p className="mt-4 text-sm sm:text-base text-truncate">
              <span className="hidden md:block">{description}</span>
              <span className="md:hidden">
                {description.substring(0, 100)}
                {description.substring(0, 100).length !== description.length &&
                  "..."}
              </span>
            </p>

            {!small && (
              <span className="flex justify-between mt-8 items-center content-center">
                <Button cartoon className="h-min" onClick={open}>
                  Book Now
                </Button>
                <Button className="font-bold" onClick={openReadMore}>
                  Read more
                </Button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
interface ModalProps {
  name: string;
  description: string;
  price: number;
  opened: boolean;
  open: () => void;
  close: () => void;
}

function ReadMoreModal({
  name,
  description,
  price,
  opened,
  open,
  close,
}: ModalProps) {
  return (
    <Modal opened={opened} onClose={close} centered title="Read More">
      <Grid className="gap-y-3 p-3">
        <Title order={1}>{name}</Title>
        <Text>{description}</Text>
        <Text fz="lg">₹{price}</Text>
      </Grid>
    </Modal>
  );
}
