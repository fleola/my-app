import { useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);
  const handleIncrementCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={handleIncrementCount}>Increment</button>
    </div>
  );
}
