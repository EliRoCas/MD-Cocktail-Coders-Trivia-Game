import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCocktailsByCategory,
  fetchCocktailDetails,
} from "../services/slices/cocktailApiSlice";

import { Alert, AlertTitle } from "@mui/material";
import "./trivia.scss";

const Trivia = () => {
  const [countdown, setCountdown] = useState(15);
  const [selectedCocktailId, setSelectedCocktailId] = useState(null);
  const [incorrectName, setIncorrectName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [buttonOrder, setButtonOrder] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("info");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cocktails, cocktailDetails, loading } = useSelector(
    (state) => state.cocktail
  );

  useEffect(() => {
    const categories = [
      "Ordinary_Drink",
      "Cocktail",
      "Shot",
      "Cocoa",
      "Shake",
      "Other / Unknown",
      "Beer",
      "Coffee / Tea",
      "Punch / Party Drink",
      "Homemade Liqueur",
    ];
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    setSelectedCategory(randomCategory);
    dispatch(fetchCocktailsByCategory(randomCategory));
  }, [dispatch]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/score");
    }
  }, [countdown, navigate]);

  useEffect(() => {
    if (cocktails && cocktails[selectedCategory] && !selectedCocktailId) {
      const cocktailList = cocktails[selectedCategory];
      const randomIndex = Math.floor(Math.random() * cocktailList.length);
      setSelectedCocktailId(cocktailList[randomIndex].idDrink);
    }
  }, [cocktails, selectedCategory, selectedCocktailId]);

  useEffect(() => {
    if (selectedCocktailId) {
      dispatch(fetchCocktailDetails(selectedCocktailId));
    }
  }, [dispatch, selectedCocktailId]);

  useEffect(() => {
    if (cocktailDetails) {
      const incorrectNamesList = [
        "Margarita",
        "Mojito",
        "Old Fashioned",
        "Daiquiri",
        "Mai Tai",
        "Pina Colada",
        "Long Island Tea",
        "Cosmopolitan",
        "Negroni",
        "Whiskey Sour",
        "Mint Julep",
        "Moscow Mule",
        "Mimosa",
        "Bloody Mary",
        "Martini",
        "Manhattan",
        "Paloma",
        "Sazerac",
        "Tom Collins",
        "Sidecar",
        "French 75",
        "Vesper",
        "Gimlet",
        "Boulevardier",
        "Corpse Reviver",
        "Aviation",
        "Penicillin",
        "Bramble",
        "Dark 'n' Stormy",
        "Pisco Sour",
        "Caipirinha",
        "Caipiroska",
        "Caipirissima",
        "Batida",
        "Rabo-de-Galo",
        "Whiskey Sour",
      ];

      const incorrectNames = incorrectNamesList.filter(
        (name) => name !== cocktailDetails.strDrink
      );
      const randomIncorrectIndex = Math.floor(
        Math.random() * incorrectNames.length
      );
      setIncorrectName(incorrectNames[randomIncorrectIndex]);

      const order =
        Math.random() > 0.5
          ? ["correct", "incorrect"]
          : ["incorrect", "correct"];
      setButtonOrder(order);
    }
  }, [cocktailDetails]);

  if (loading != "succeeded" || !cocktailDetails) {
    return <p>Loading...</p>;
  }

  const cocktail = cocktailDetails;

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  const handleButtonClick = (order) => {
    if (order === "correct") {
      setAlertMessage("You’re a certified cocktail genius!");
      setAlertSeverity("success");
    } else {
      setAlertMessage("You need more happy hours!");
      setAlertSeverity("warning");
    }
    setShowAlert(true);
    setTimeout(() => {
      navigate("/score");
    }, 2000);
  };

  return (
    <div className="triviaContainer">
      <h2>Piensa o... ¡Shot!</h2>
      <section className="gameCard">
        <div className="timerImgContainer">
          <div className="timerBarContainer">
            <div
              className="timerBar"
              style={{ width: `${(countdown / 15) * 100}%` }}
            ></div>
          </div>
          <p className="timer">Time left: {countdown}</p>
          <img
            src={cocktail.strDrinkThumb}
            alt="cocktail image reference"
            className="triviaImage"
          />
        </div>
        <div className="hintsContainer">
          <p className="hintsTitle">Category:</p>
          <span className="hintsData"> {cocktail.strCategory}</span>
          <p className="hintsTitle">Ingredients:</p>
          <ul className="ingredientsList">
            {ingredients.map((ingredient, index) => (
              <li className="ingredients" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="triviaAnswers">
          {buttonOrder.map((order, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(order)}
              className="triviaButton"
            >
              {order === "correct" ? cocktail.strDrink : incorrectName}
            </button>
          ))}
        </div>
      </section>
      {showAlert && (
        <Alert
          variant="outlined"
          severity={alertSeverity}
          onClose={() => setShowAlert(false)}
        >
          <AlertTitle>
            {alertSeverity === "success" ? "Great" : "Sorry!"}
          </AlertTitle>
          {alertMessage}
        </Alert>
      )}
    </div>
  );
};

export default Trivia;
