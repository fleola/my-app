import { useEffect, useState } from "react";

export function ClickCounter({ onCounterChange }) {
  const [count, setCount] = useState(0);
  const handleIncrementCount = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    onCounterChange(count);
  }, [count]);
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={handleIncrementCount}>Increment</button>
    </div>
  );
}
