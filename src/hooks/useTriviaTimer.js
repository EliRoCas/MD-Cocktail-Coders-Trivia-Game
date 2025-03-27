import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const UseTriviaTimer = (initialTime = 15, delayStart = 1000) => {
  const [countdown, setCountdown] = useState(initialTime);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const navigate = useNavigate();
  const intervalRef = useRef();
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsTimerActive(true);
    }, delayStart);

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [delayStart]);

  useEffect(() => {
    if (!isTimerActive) return;

    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          navigate("/roulette", { state: { isCorrect: false } });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isTimerActive, navigate]);

  return { countdown, isTimerActive };
};

export default UseTriviaTimer;
