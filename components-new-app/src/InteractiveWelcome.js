import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };
  handleInputChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <label>Type your name</label>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        ></input>
        <Welcome name={this.state.name} />
      </div>
    );
  }
}
