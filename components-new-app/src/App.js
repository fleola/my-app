import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Welcome } from "./Welcome";
import { Container } from "./Container";

export class App extends React.Component {
  onLogin = (state) => {
    console.log(state);
  };

  render() {
    return (
      <Container>
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
        <Login login={this.onLogin} />
      </Container>
    );
  }
}
