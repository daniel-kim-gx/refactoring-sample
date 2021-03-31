import { useSelector, useDispatch } from "react-redux";
import * as counterActions from "../store/reducers";
import Bolder from "../base/Bolder";
import AccountViewer from "./AccountViewer";

function ReduxComponent() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const randomize = () => dispatch(counterActions.asyncRequest());
  const increase = () => dispatch(counterActions.increase());
  const decrease = () => dispatch(counterActions.decrease());

  return (
    <>
      <div>
        <Bolder>count : {count}</Bolder>
        <div>
          <button onClick={randomize}>Randomize</button>
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
        </div>
      </div>

      <AccountViewer />
    </>
  );
}

export default ReduxComponent;
