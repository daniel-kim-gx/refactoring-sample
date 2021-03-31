import { useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";

export function feepayerPoolAccountSelector(state) {
  return state.feepayerPool.account;
}

function AccountInfoModal({ show, onHide }) {
  useEffect(() => {
    console.log("[ AccountInfoModal ] re-render!");

    // for (let i = 0; i < 3000000000; ++i) {}
  });

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>
        <AccountInfoModalContent />
      </Modal.Body>
    </Modal>
  );
}

function AccountInfoModalContent() {
  const account = useSelector((state) => state.account);
  const { address, publicKey, createdAt, updatedAt } = account ?? {};

  return (
    <div>
      <div>Address : {address}</div>
      <div>PublicKey : {publicKey}</div>
      <div>CreatedAt : {createdAt}</div>
      <div>UpdatedAt : {updatedAt}</div>
    </div>
  );
}

export default AccountInfoModal;
