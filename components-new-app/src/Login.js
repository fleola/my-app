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
  handleLogin = () => {
    this.props.login(this.state);
  };
  handleClean = () => {
    this.setState(() => {
      return {
        username: "",
        password: "",
        remember: false,
      };
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
          value={this.state.password}
          type="password"
          onChange={this.handleInput}
        ></input>
        <label>Remember ?</label>
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleInput}
        ></input>

        <button
          disabled={this.state.username && this.state.password ? false : true}
          onClick={this.handleLogin}
        >
          Login
        </button>
        <button onClick={this.handleClean}>Reset</button>
      </div>
    );
  }
}
