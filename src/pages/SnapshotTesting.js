import SnapshotTestingComponent from "../components/SnapshotTesting";

const list = [
  {
    id: "1",
    title: "This is title 1",
    description: "This is description 1",
  },

  {
    id: "2",
    title: "This is title 2",
    description: "This is description 2",
  },

  {
    id: "3",
    title: "This is title 3",
    description: "This is description 3",
  },
];

const object = {
  name: "This is real name",
  age: 400,
  Address: "This is real address",
};

const SnapshotTesting = () => {
  return <SnapshotTestingComponent list={list} object={object} />;
};

export default SnapshotTesting;
