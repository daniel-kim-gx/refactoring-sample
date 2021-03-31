import { useState } from "react";
import SuccessModal from "./SuccessModal";

function useSuccessModal({ onConfirm = () => {} }) {
  const [modalHeader, setModalHeader] = useState("");
  const [isShown, setIsShown] = useState(false);

  const showModalWithMessage = (message) => {
    setModalHeader(message);
    setIsShown(true);
  };

  const Modal = () => (
    <SuccessModal
      show={isShown}
      onHide={() => setIsShown(false)}
      onConfirm={() => {
        onConfirm();
        setIsShown(false);
      }}
      header={modalHeader}
    />
  );

  return [Modal, showModalWithMessage];
}

function DashboardPageHook() {
  const [SuccessModal, showModalWithMessage] = useSuccessModal(() =>
    console.log("modal closed!")
  );

  return (
    <>
      <div>
        <button onClick={() => showModalWithMessage("Greetings!")}>
          Show SuccessModal with Greetings!
        </button>

        <button onClick={() => showModalWithMessage("Congratulations!")}>
          Show SuccessModal with Congratulations!
        </button>

        <div>
          <div>Amazing component</div>
        </div>
      </div>

      <SuccessModal />
    </>
  );
}

export default DashboardPageHook;
