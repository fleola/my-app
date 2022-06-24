import { combineReducers, createStore } from "redux";
import { CounterReducer, incrementCounter } from "./CounterState";
import { todosState } from "./TodosState";

const rootReducer = combineReducers({
  counter: CounterReducer,
  todos: todosState.reducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(1));
store.dispatch(
  todosState.actions.add({ id: 1, title: "Learn React", completed: false })
);
