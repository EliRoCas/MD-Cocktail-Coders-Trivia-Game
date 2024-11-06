import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./trivia.scss";
import imgTest from "../assets/cocktail-trivia-1.jpg";

const Trivia = () => {
  const [countdown, setCountdown] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      navigate("/score");
    }

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className="triviaContainer">
      <h2>Piensa o... ¡Shot!</h2>
      <section className="gameCard">
        <p className="timer">Time left: {countdown}</p>
        <img
          src={imgTest}
          alt="cocktail image reference"
          className="triviaImage"
        />
        <p className="hints">Category: </p>
        <p className="hints">Ingredients: </p>
      </section>
      <div className="triviaAnswers">
        <button className="triviaButton">True</button>
        <button className="triviaButton">False</button>
      </div>
    </div>
  );
};

export default Trivia;
