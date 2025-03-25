import PropTypes from "prop-types";
import "./cocktailModal.scss";

const CocktailModal = ({ isOpen, toggleModal, cocktail }) => {
  if (!cocktail) return null;

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{cocktail.strDrink}</h2>
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              loading="lazy"
            />
            <h3 className="modal-title">Ingredients</h3>
            <ul>
              {Object.keys(cocktail)
                .filter(
                  (key) => key.startsWith("strIngredient") && cocktail[key]
                )
                .map((key) => (
                  <li key={key}>{cocktail[key]}</li>
                ))}
            </ul>
            <h3 className="modal-title">Instructions</h3>
            <p>{cocktail.strInstructions}</p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
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

// import { useState } from "react";
// import "./cocktailModal.scss";

// const CocktailModal = ({}) => {
//   const[modal,setModal] = useState(false);

//   const toggleModal = () => {
//     setModal(!modal)
//   }

//   if(modal){
//     document.body.classList.add("active-modal")
//   }else{
//     document.body.classList.remove("active-modal")
//   }

//   return (
//     <>

//     <button
//       onClick={toggleModal}
//       className="btn-modal">
//         Mas info
//       </button>
//       {modal&&(
//       <div className="modal">
//       <div
//         onClick={toggleModal}
//         className="overlay"></div>
//       <div className="modal-content">
//       <h2>hello modal</h2>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. A illum quae voluptate dicta harum? Unde atque facere aliquam nulla impedit quidem natus, itaque at laudantium architecto voluptatibus vel labore dolor?
//       </p>
//       <button
//         className="close-modal"
//         onClick={toggleModal}
//         >Close</button>
//       </div>
//     </div>
//       )}

//     </>
//   )
// }

// export default CocktailModal;

// import PropTypes from 'prop-types';
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

// const CocktailModal = ({ isOpen, onOpenChange, cocktail }) => {
//   if (!cocktail) return null;

//   return (
//     <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
//       <ModalContent>
//         {(onClose) => (
//           <>
//             <ModalHeader className="flex flex-col gap-1">{cocktail.strDrink}</ModalHeader>
//             <ModalBody>
//               <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
//               <h3>Ingredients</h3>
//               <ul>
//                 {Object.keys(cocktail).filter(key => key.startsWith('strIngredient') && cocktail[key]).map(key => (
//                   <li key={key}>
//                     {cocktail[key]}
//                   </li>
//                 ))}
//               </ul>
//               <h3>Instructions</h3>
//               <p>{cocktail.strInstructions}</p>
//             </ModalBody>
//             <ModalFooter>
//               <Button color="danger" variant="light" onPress={onClose}>
//                 Cerrar
//               </Button>
//               <Button color="primary" onPress={onClose}>
//                 Action
//               </Button>
//             </ModalFooter>
//           </>
//         )}
//       </ModalContent>
//     </Modal>
//   );
// };

// CocktailModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onOpenChange: PropTypes.func.isRequired,
//   cocktail: PropTypes.shape({
//     strDrink: PropTypes.string.isRequired,
//     strDrinkThumb: PropTypes.string.isRequired,
//     strInstructions: PropTypes.string.isRequired,
//     strIngredient1: PropTypes.string,
//     strIngredient2: PropTypes.string,
//     strIngredient3: PropTypes.string,
//   }).isRequired,
// };

// export default CocktailModal;
