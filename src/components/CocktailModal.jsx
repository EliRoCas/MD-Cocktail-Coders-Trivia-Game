import PropTypes from "prop-types";
import Modal from "./modals/Modal";
import "./cocktailModal.scss";

const CocktailModal = ({ isOpen, toggleModal, cocktail }) => {
  if (!cocktail) return null;

  const ingredients = Object.keys(cocktail)
    .filter((key) => key.startsWith("strIngredient") && cocktail[key])
    .map((key) => cocktail[key]);

  return (
    <Modal
      isOpen={isOpen}
      toggleModal={toggleModal}
      title={cocktail.strDrink}
    >
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        loading="lazy"
      />
      <div className="cocktail-modal">
        <h3 className="modal-title">Ingredients</h3>
        <ul
          className={`modal-ingredients ${
            ingredients.length > 3 ? "multiple-columns" : ""
          }`}
        >
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="modal-title">Instructions</h3>
        <p className="modal-info">{cocktail.strInstructions}</p>
      </div>
    </Modal>
  );
};

CocktailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  cocktail: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strIngredient1: PropTypes.string,
    strIngredient2: PropTypes.string,
    strIngredient3: PropTypes.string,
  }).isRequired,
};

export default CocktailModal;
