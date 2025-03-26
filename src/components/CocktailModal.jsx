import PropTypes from "prop-types";
import Modal from "./modals/Modal";
import "./cocktailModal.scss";

const CocktailModal = ({ isOpen, toggleModal, cocktail }) => {
  if (!cocktail) return null;

  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal} title={cocktail.strDrink}>
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        loading="lazy"
      />
      <div className="cocktail-modal">
        <h3 className="modal-title">Ingredients</h3>
        <ul>
          {Object.keys(cocktail)
            .filter((key) => key.startsWith("strIngredient") && cocktail[key])
            .map((key) => (
              <li key={key}>{cocktail[key]}</li>
            ))}
        </ul>
        <h3 className="modal-title">Instructions</h3>
        <p>{cocktail.strInstructions}</p>
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
