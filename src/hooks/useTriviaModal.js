import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseTriviaModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const navigate = useNavigate();

  const showResult = (isCorrect) => {
    if (isCorrect) {
      setModalTitle("Great");
      setModalMessage("You're a certified cocktail genius!");
    } else {
      setModalTitle("Sorry!");
      setModalMessage("You need more happy hours!");
    }
    setModalOpen(true);

    setTimeout(() => {
      navigate("/ruleta", { state: { isCorrect } });
    }, 2000);
  };

  const toggleModal = () => {
    setModalOpen(false);
  };

  return { modalOpen, modalMessage, modalTitle, showResult, toggleModal };
};

export default UseTriviaModal;
