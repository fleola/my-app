import { useState } from "react";
import { useCounter } from "./useCounter";

export function ClickCounter() {
  const [count, setCount] = useState(0);
  const { state, incrementFunction, decrementFunction, resetFunction } =
    useCounter(count);
  return (
    <div>
      <h3>Counter: {state}</h3>
      <button onClick={incrementFunction}>Increment</button>
      <button onClick={decrementFunction}>Decrement</button>
      <button onClick={resetFunction}>Reset</button>
    </div>
  );
}
