import { useState } from "react";

export function useCounter(stateValue) {
  const [data, setData] = useState(stateValue);

  const handleIncrementCount = () => {
    setData((data) => data + 1);
  };

  const handleDecrementCount = () => {
    setData((data) => data - 1);
  };

  const handleReset = () => {
    setData(stateValue);
  };

  return {
    state: data,
    incrementFunction: handleIncrementCount,
    decrementFunction: handleDecrementCount,
    resetFunction: handleReset,
  };
}
