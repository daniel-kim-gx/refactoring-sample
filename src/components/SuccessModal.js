import Modal from "react-bootstrap/Modal";

function SuccessModal({ show, onHide, onConfirm, header }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <span>{header}</span>
      </Modal.Header>
      <Modal.Footer>
        <button onClick={onConfirm}>Confirm</button>
      </Modal.Footer>
    </Modal>
  );
}

export default SuccessModal;
