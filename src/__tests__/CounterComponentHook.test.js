import { render } from "@testing-library/react";
import CounterComponentHook from "../components/CounterComponentHook";

describe("<CounterComponentHook />", () => {
  it("Should match snapshot", () => {
    const { container } = render(<CounterComponentHook />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
