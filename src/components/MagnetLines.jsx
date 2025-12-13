import { useEffect, useRef } from "react";
import "./MagnetLines.css";

const MagnetLines = ({ lines = 6 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;

      const lineElements = container.querySelectorAll(".magnet-line");

      lineElements.forEach((line, index) => {
        const lineCenter = (index + 0.5) * (rect.height / lines);
        const distance = mouseY - lineCenter;

        const movement = Math.max(
          -20,
          Math.min(20, distance * 0.2)
        );

        line.style.transform = `translateY(${movement}px)`;
      });
    };

    const resetLines = () => {
      const lineElements = container.querySelectorAll(".magnet-line");
      lineElements.forEach((line) => {
        line.style.transform = "translateY(0)";
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", resetLines);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", resetLines);
    };
  }, [lines]);

  return (
    <div className="magnet-container" ref={containerRef}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="magnet-line" />
      ))}
    </div>
  );
};

export default MagnetLines;
