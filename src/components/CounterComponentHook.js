import React, { useState } from "react";
import Bolder from "../base/Bolder";

const CounterComponentHook = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount((count) => count + 1);

  return (
    <div>
      <div>
        <Bolder>counter : {count}</Bolder>
      </div>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default CounterComponentHook;
