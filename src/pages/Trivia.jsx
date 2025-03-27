import categories from "../data/categories";
import incorrectNamesList from "../data/incorrectNames";
import Modal from "../components/modals/Modal";
import useTriviaTimer from "../hooks/useTriviaTimer";
import useTriviaCocktails from "../hooks/useTriviaCocktails";
import useTriviaModal from "../hooks/useTriviaModal";

import "./trivia.scss";

const Trivia = () => {
  const { countdown } = useTriviaTimer();
  const { cocktailDetails, loading, incorrectName, buttonOrder } = useTriviaCocktails(
    categories,
    incorrectNamesList
  );
  const { modalOpen, modalTitle, modalMessage, showResult, toggleModal } = useTriviaModal();

  if (loading !== "succeeded" || !cocktailDetails) {
    return <p>Loading...</p>;
  }

  const ingredients = Array.from({ length: 15 }, (_, i) => cocktailDetails[`strIngredient${i}`]).filter(
    (x) => !!x
  );

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
              <li
                className="ingredients"
                key={index}
              >
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
      <Modal
        isOpen={modalOpen}
        toggleModal={toggleModal}
        title={modalTitle}
      >
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
};

export default Trivia;
