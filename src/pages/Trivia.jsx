import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import categories from "../data/categories";
import incorrectNamesList from "../data/incorrectNames";
import Modal from "../components/modals/Modal";
import useTriviaTimer from "../hooks/useTriviaTimer";
import useTriviaCocktails from "../hooks/useTriviaCocktails";
import useTriviaAnswers from "../hooks/useTriviaAnswers";
import useTriviaModal from "../hooks/useTriviaModal";

import "./trivia.scss";

const Trivia = () => {
  const { countdown } = useTriviaTimer();
  const { fetchRandomCategory, fetchRandomCocktailDetails } =
    useTriviaCocktails(categories, dispatch);
  const { incorrectName, buttonOrder, setupAnswers } =
    useTriviaAnswers(incorrectNamesList);
  const { modalOpen, modalTitle, modalMessage, showResult, toggleModal } =
    useTriviaModal();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCocktailId, setSelectedCocktailId] = useState(null);
  const dispatch = useDispatch();
  const { cocktails, cocktailDetails, loading } = useSelector(
    (state) => state.cocktail
  );

  useEffect(() => {
    const randomCat = fetchRandomCategory();
    setSelectedCategory(randomCat);
  }, [fetchRandomCategory]);

  useEffect(() => {
    if (cocktails && cocktails[selectedCategory] && !selectedCocktailId) {
      const cocktailId = fetchRandomCocktailDetails(
        cocktails[selectedCategory]
      );
      setSelectedCocktailId(cocktailId);
    }
  }, [
    cocktails,
    selectedCategory,
    selectedCocktailId,
    fetchRandomCocktailDetails,
  ]);

  useEffect(() => {
    if (cocktailDetails) {
      setupAnswers(cocktailDetails.strDrink);
    }
  }, [cocktailDetails, setupAnswers]);

  if (loading !== "succeeded" || !cocktailDetails) {
    return <p>Loading...</p>;
  }

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktailDetails[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  return (
    <div className="triviaContainer">
      <h2>1-2-3... ¡Shot!</h2>
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
            src={cocktailDetails.strDrinkThumb}
            alt="cocktail image reference"
            className="triviaImage"
          />
        </div>
        <div className="hintsContainer">
          <p className="hintsTitle">Category:</p>
          <span className="hintsData"> {cocktailDetails.strCategory}</span>
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
              onClick={() => showResult(order === "correct")}
              className="triviaButton"
            >
              {order === "correct" ? cocktailDetails.strDrink : incorrectName}
            </button>
          ))}
        </div>
      </section>
      <Modal isOpen={modalOpen} toggleModal={toggleModal} title={modalTitle}>
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
};

export default Trivia;

