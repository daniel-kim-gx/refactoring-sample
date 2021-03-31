import React, { useState } from "react";

const CounterComponentHook = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount((count) => count + 1);

  return (
    <div>
      <div>counter : {count}</div>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default CounterComponentHook;
