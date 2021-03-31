import { useEffect, useState } from "react";

const Child = ({ name }) => {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log(`[two] ${name} rerendering...`);
  });

  return (
    <div>
      data : {data}
      <button onClick={() => setData((d) => d + 1)}>incrase</button>
    </div>
  );
};

const Parent = () => {
  return (
    <div>
      Test
      <Child name="1" />
      <Child name="2" />
      <Child name="3" />
    </div>
  );
};

export default Parent;
