import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { TodoList } from "./TodoList";

export class App extends React.Component {
  onLogin = (state) => {
    console.log(state);
  };

  render() {
    return (
      <Container title="That's my title">
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
        <TodoList
          render={(items, handleRemoveTodo) => {
            return items.map((item, index) => (
              <li key={item + index}>
                {item}
                <button onClick={() => handleRemoveTodo(index)}>
                  Remove TODO
                </button>
              </li>
            ));
          }}
        />
      </Container>
    );
  }
}
