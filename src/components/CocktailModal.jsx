import PropTypes from 'prop-types';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const CocktailModal = ({ isOpen, onOpenChange, cocktail }) => {
  if (!cocktail) return null;

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{cocktail.strDrink}</ModalHeader>
            <ModalBody>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <h3>Ingredients</h3>
              <ul>
                {Object.keys(cocktail).filter(key => key.startsWith('strIngredient') && cocktail[key]).map(key => (
                  <li key={key}>
                    {cocktail[key]}
                  </li>
                ))}
              </ul>
              <h3>Instructions</h3>
              <p>{cocktail.strInstructions}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

CocktailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
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
