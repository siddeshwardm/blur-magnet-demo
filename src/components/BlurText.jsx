import { useState } from "react";
import "./BlurText.css";

const BlurText = ({ text, reveal = false }) => {
  const [hovered, setHovered] = useState(false);

  const isRevealed = reveal || hovered;

  return (
    <span
      className={`blur-text ${isRevealed ? "sharp" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </span>
  );
};

export default BlurText;
