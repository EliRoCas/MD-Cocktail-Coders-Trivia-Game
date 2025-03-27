import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseTriviaTimer = (initialTime = 15) => {
  const [countdown, setCountdown] = useState(initialTime);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/ruleta", { state: { isCorrect: false } });
    }
  }, [countdown, navigate]);
};

export default UseTriviaTimer;
