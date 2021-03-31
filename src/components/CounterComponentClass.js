import React from "react";

class CounterComponentClass extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.increase = this.increase.bind(this); // 이게 없으면, `this.setState`가 undefined이라는 TypeError가 발생한다.
  }

  increase() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  render() {
    return (
      <div>
        <div>counter : {this.state.count}</div>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default CounterComponentClass;
