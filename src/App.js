import { useState } from "react";
import MessagePopup from "./components/MessagePopup/MessagePopup";
import "./styles.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App">
      <h1>Glassmorphism Dialog</h1>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Click Me
      </button>
      <MessagePopup setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}
