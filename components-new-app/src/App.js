import React from "react";
import { Counter } from "./Counter";
import { GithubUserList } from "./GithubUserList";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={19} />
        <Counter />
        <GithubUserList />
      </div>
    );
  }
}
