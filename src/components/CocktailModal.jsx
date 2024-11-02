import PropTypes from 'prop-types';
import "./cocktailModal.scss";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

const CocktailModal = ({ cocktail, onClose, isOpen }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{cocktail.strDrink}</ModalHeader>
                        <ModalBody>
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                            <p>{cocktail.strInstructions}</p>
                            {/* Aquí puedes añadir más información como ingredientes, preparación, etc. */}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Cerrar
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

CocktailModal.propTypes = {
    cocktail: PropTypes.shape({
        strDrink: PropTypes.string.isRequired,
        strDrinkThumb: PropTypes.string.isRequired,
        strInstructions: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default CocktailModal;


