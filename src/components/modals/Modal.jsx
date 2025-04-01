import PropTypes from "prop-types";
import "./modal.scss";
import Overlay from "../Overlay";

const Modal = ({ isOpen, toggleModal, title, children }) => {
  return (
    <Overlay
      isOpen={isOpen}
      closeModal={toggleModal}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button
            className="close-modal"
            onClick={toggleModal}
          >
            X
          </button>
        </div>
        <div className="modal-children">{children}</div>
      </div>
    </Overlay>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Modal;
