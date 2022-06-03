import React from "react";

export class UncontrolledLogin extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({ username, password, remember });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input name="username"></input>
          <label>Password</label>
          <input name="password" type="password"></input>
          <label>Remember ?</label>
          <input name="remember" type="checkbox"></input>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
