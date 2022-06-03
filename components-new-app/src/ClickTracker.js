import React from "react";

export class ClickTracker extends React.Component {
  state = {
    click: "",
  };
  handleClick = (event) => {
    this.setState(() => {
      return {
        click: event.target.innerHTML,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>1^ Button</button>
        <button onClick={this.handleClick}>2^ Button</button>
        <button onClick={this.handleClick}>3^ Button</button>
        <h1>Last button pressed: {this.state.click}</h1>
      </div>
    );
  }
}
