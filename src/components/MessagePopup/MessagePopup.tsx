import { useEffect, useState } from "react";
import "./MessagePopup.scss";

interface MessagePopupProps {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
}

const MessagePopup = ({ isOpen, setIsOpen }: MessagePopupProps) => {
  const [isBGOpen, setIsBGOpen] = useState(false);
  const [isContainerOpen, setIsContainerOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsBGOpen(true);
      setTimeout(() => {
        setIsContainerOpen(true);
      }, 500);
    } else {
      setIsContainerOpen(false);
      setTimeout(() => {
        setIsBGOpen(false);
      }, 500);
    }
  }, [isOpen]);

  const onExitHandler = () => {
    setIsOpen(false);
  };

  return (
    <div
      onClick={onExitHandler}
      className={`message-popup__bg ${isBGOpen && "open"}`}
    >
      <div className={`message-popup__container ${isContainerOpen && "open"}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  );
};

export default MessagePopup;
