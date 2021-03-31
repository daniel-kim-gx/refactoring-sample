import { render } from "@testing-library/react";
import SnapshotTesting from "../components/SnapshotTesting";

const mockProps = {
  list: [
    {
      id: "test-id-1",
      title: "test-title-1",
      description: "test-description-1",
    },

    {
      id: "test-id-2",
      title: "test-title-2",
      description: "test-description-2",
    },

    {
      id: "test-id-3",
      title: "test-title-3",
      description: "test-description-3",
    },
  ],

  object: {
    name: "test-name",
    age: 400,
    address: "test-address",
  },
};

describe("<SnapshotTesting />", () => {
  it("Should match snapshot", () => {
    const { container } = render(<SnapshotTesting {...mockProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
