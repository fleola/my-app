import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter(props) {
  const [count, setCount] = useState(props.initialCount);
  setInterval(() => {
    setCount(count + props.incrementAmount);
  }, props.incrementInterval);
  return <CounterDisplay count={count} />;
}
