import React from "react";

interface BookingModalProps {
  opened: boolean;
  open: () => void;
  close: () => void;
}

const FindModal = ({ opened, open, close }: BookingModalProps) => {
  return <div>FindModal</div>;
};

export default FindModal;
