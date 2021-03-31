import Bolder from "../base/Bolder";

function SnapshotTesting({ list, object }) {
  return (
    <div>
      THIS component is for snapshot testing.
      <Child1 list={list} />
      <Child2 object={object} />
    </div>
  );
}

function Child1({ list }) {
  return (
    <div>
      This is child one.
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <Bolder>Title is : {item.title}</Bolder>
            </li>
          );
        })}
      </ul>
      <LengthChecker list={list} />
    </div>
  );
}

function Child2({ object }) {
  const { name, age, address } = object;

  return (
    <div>
      This is child two.
      <div>
        <Bolder>
          My name is: <strong>{name}</strong>
        </Bolder>
      </div>
      <div>
        My age is: <strong>{age}</strong>
      </div>
      <div>
        My address is: <strong>{address}</strong>
      </div>
    </div>
  );
}

function LengthChecker({ list }) {
  return <div>List's length is : {list.length}</div>;
}

export default SnapshotTesting;
