import { useCallback } from "react";
import { useState } from "react";

export function useCounter(stateValue) {
  const [data, setData] = useState(stateValue);

  const handleIncrementCount = useCallback(function handleIncrementCount() {
    setData((data) => data + 1);
  }, []);

  const handleDecrementCount = useCallback(function handleDecrementCount() {
    setData((data) => data - 1);
  }, []);

  const handleReset = useCallback(
    function handleReset() {
      setData(stateValue);
    },
    [stateValue]
  );

  return {
    state: data,
    incrementFunction: handleIncrementCount,
    decrementFunction: handleDecrementCount,
    resetFunction: handleReset,
  };
}
