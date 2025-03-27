// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UseTriviaModal = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const [modalTitle, setModalTitle] = useState("");

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseTriviaModal = () => {
  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
  });

  const navigate = useNavigate();
  const timeoutRef = useRef();

  const results = {
    true: {
      title: "Great",
      message: "You're a certified cocktail genius!",
    },
    false: {
      title: "Sorry!",
      message: "You need more happy hours!",
    },
  };

  const showResult = (isCorrect) => {
    setModal({ ...results[isCorrect], open: true });
    timeoutRef.current = setTimeout(() => {
      navigate("/ruleta", { state: { isCorrect } });
    }, 2000);
  };

  const toggleModal = () => {
    setModal((prev) => ({ ...prev, open: false }));
    clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    modalOpen: modal.open,
    modalTitle: modal.title,
    modalMessage: modal.message,
    showResult,
    toggleModal,
    isCorrect: modal.isCorrect,
  };
};

export default UseTriviaModal;
