import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import rewardsAndPenalties from "../data/rewardsAndPenalties";
import Modal from "../components/modals/Modal";
import "./roulette.scss";

const { reward, penalty } = rewardsAndPenalties;

function Roulette() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isCorrect } = location.state || {};
  const options = isCorrect ? reward : penalty;

  const [selectedOption, setSelectedOption] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const spinWheel = () => {
    setIsSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 1800;
    const newRotation = rotation + randomRotation;

    setRotation(newRotation);

    setTimeout(() => {
      const segmentAngle = 360 / options.length;
      const normalizedRotation = (newRotation % 360) + segmentAngle / 2;
      const selectedSegment =
        Math.floor(normalizedRotation / segmentAngle) % options.length;
      setSelectedOption(options[selectedSegment]);
      setIsSpinning(false);
      setIsModalOpen(true);
    }, 3000);
  };

  const toggleModal = () => {
    setIsModalOpen(false);
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
            className={`ruleta-segment seg-${index + 1}`}
            data-label={option.replace(/\s+/g, "\n")}
          ></div>
        ))}
      </div>
      <div className="ruletaBtn">
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className="spin-button"
        >
          {isSpinning ? "Spinning..." : "Spin"}
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        title="The Veredict..."
      >
        <p>{selectedOption}!</p>
        <button
          onClick={toggleModal}
          className="modalBtn"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Roulette;
