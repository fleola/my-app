import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={19} />
        <Counter
          initialCount={5}
          incrementAmount={5}
          incrementInterval={3000}
        />
        <ClickCounter />
        <ClickTracker />
      </div>
    );
  }
}
