import { useEffect, useState } from "react";

const Child = ({ name, data, onClick }) => {
  useEffect(() => {
    console.log(`[one] ${name} rerendering..`);
  });

  return (
    <div className="counter">
      data : {data}
      <button onClick={onClick}>increase</button>
    </div>
  );
};

const Parent = () => {
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);

  return (
    <div>
      <Child name="1" data={data1} onClick={() => setData1((d) => d + 1)} />

      <Child name="2" data={data2} onClick={() => setData2((d) => d + 1)} />

      <Child name="3" data={data3} onClick={() => setData3((d) => d + 1)} />
    </div>
  );
};

export default Parent;
