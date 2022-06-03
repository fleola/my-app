import React from "react";

export class ClickCounter extends React.Component {
  state = {
    count: 0,
  };
  handleIncrementCount = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.handleIncrementCount}>Increment</button>
      </div>
    );
  }
}
