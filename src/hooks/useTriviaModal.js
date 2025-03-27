import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseTriviaModal = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
    isCorrect: null,
  });

  const results = {
    true: { title: "Great", message: "You're a certified cocktail genius!" },
    false: { title: "Sorry!", message: "You need more happy hours!" },
  };

  const showResult = (isCorrect) => {
    setModal({
      ...results[isCorrect],
      open: true,
      isCorrect,
    });
  };

  const toggleModal = () => {
    setModal((prev) => ({ ...prev, open: false }));
    navigate("/roulette", { state: { isCorrect: modal.isCorrect } });
  };

  return {
    modalOpen: modal.open,
    modalTitle: modal.title,
    modalMessage: modal.message,
    isCorrect: modal.isCorrect,
    showResult,
    toggleModal,
  };
};

export default UseTriviaModal;
