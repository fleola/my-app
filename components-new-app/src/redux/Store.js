import { createStore } from "redux";
import { CounterReducer, incrementCounter } from "./CounterState";

export const store = createStore(CounterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(1));
