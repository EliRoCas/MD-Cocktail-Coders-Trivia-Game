import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ruleta.css";

const shots = [
  "Todos toman",
  "Shot x 2",
  "Volver a girar",
  "Reto",
  "Shot x 3",
  "Shot x4",
  "Te salvas",
];
const shots2 = [
  "Alma de la fiesta, ¡todos toman!",
  "Siguiente ronda",
  "Reto: Castiga a alguien",
  "Reto: Alguien llama a un ex",
  "Eliges si bebes o no",
  "Selfichiste",
  "Ups Shot x 3",
];

function Ruleta() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isCorrect } = location.state || {};
  const options = isCorrect ? shots2 : shots;

  const [selectedShot, setSelectedShot] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    setIsSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 1800;
    setRotation(rotation + randomRotation);

    setTimeout(() => {
      const selectedSegment = Math.floor(
        ((rotation + randomRotation) % 360) / (360 / options.length)
      );
      setSelectedShot(options[selectedSegment]);
      setIsSpinning(false);
    }, 3000);
  };

  const handleNextTurn = () => {
    navigate("/trivia");
  };

  return (
    <div className="ruleta-container">
      <div
        className={`ruleta ${isSpinning ? "spinning" : ""}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className="ruleta-segment"
            data-label={option} // Usamos data-label para mostrar el texto en CSS
            style={{
              transform: `rotate(${index * (360 / options.length)}deg)`,
            }}
          ></div>
        ))}
      </div>
      {selectedShot && <div className="result">¡Te toca {selectedShot}!</div>}
      <div className="ruletaBtn">
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className="spin-button"
        >
          {isSpinning ? "Girando..." : "Girar"}
        </button>
        <button onClick={handleNextTurn} className="next-turn-button">
          Siguiente turno
        </button>
      </div>
    </div>
  );
}

export default Ruleta;
