import React from "react";
import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Hello />
      <Welcome name="John" age={19} />
      <Counter />
      <GithubUser username="fleola" />
    </div>
  );
}
