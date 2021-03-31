import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AccountInfoModal from "../base/AccountInfoModal";
import * as counterActions from "../store/reducers";

function AccountViewer() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const requestAccount = () => dispatch(counterActions.requestAccount());

  const showModal = () => {
    requestAccount();
    setShow(true);
  };

  return (
    <>
      <div>This is account viewer.</div>
      <button onClick={showModal}>Show modal</button>

      <AccountInfoModal show={show} onHide={() => setShow(false)} />
    </>
  );
}

export default AccountViewer;
