import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };
  handleInput = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const remember = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? remember : value,
    });
  };

  render() {
    return (
      <div>
        <label>Username</label>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleInput}
        ></input>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleInput}
        ></input>
        <label>Remember ?</label>
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleInput}
        ></input>
      </div>
    );
  }
}
