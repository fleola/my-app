import { createSlice } from "@reduxjs/toolkit";

export const todosState = createSlice({
  name: "todos",
  initialState: [
    {
      id: "",
      title: "",
      completed: false,
    },
  ],
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload.id),
    edit: (state, action) =>
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        }
        return todo;
      }),
  },
});
