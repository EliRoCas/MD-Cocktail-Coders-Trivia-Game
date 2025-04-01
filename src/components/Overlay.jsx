import PropTypes from "prop-types";

const Overlay = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null; 
  return (
    <div
      className="overlay"
      onClick={closeModal}
    >
      {children}
    </div>
  );
};

Overlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Overlay;
