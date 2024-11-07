import { useState } from "react";
import "./ruleta.css";

const shots = ["1", "2", "volver a girar", "reto", "3", "4", "salvarte"];
const shots2 = [
  "1",
  "Todos toman",
  "elige a uno",
  "llamada a tu ex",
  "ups 5",
  "selfichiste",
  "ups 3",
];

function Ruleta() {
  const [selectedShot, setSelectedShot] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    setIsSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 1800;
    setRotation(rotation + randomRotation);

    setTimeout(() => {
      const selectedSegment = Math.floor(
        ((rotation + randomRotation) % 360) / (360 / shots.length)
      );
      setSelectedShot(shots[selectedSegment]);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="ruleta-container">
      <div
        className={`ruleta ${isSpinning ? "spinning" : ""}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {shots.map((shot, index) => (
          <div
            key={index}
            className="ruleta-segment"
            data-label={shot} // Usamos data-label para mostrar el texto en CSS
            style={{ transform: `rotate(${index * (360 / shots.length)}deg)` }}
          ></div>
        ))}
      </div>
      <button onClick={spinWheel} disabled={isSpinning} className="spin-button">
        {isSpinning ? "Girando..." : "Girar"}
      </button>
      {selectedShot && <div className="result">¡Te toca {selectedShot}!</div>}
    </div>
  );
}

export default Ruleta;
