import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

const onLogin = (state) => {
  console.log(state);
};

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
        <InteractiveWelcome />
        <Login login={onLogin} />
        <UncontrolledLogin />
      </div>
    );
  }
}
