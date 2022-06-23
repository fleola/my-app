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
    remove: (state, action) => state.filter((todo) => todo !== action.payload),
    edit: (state, action) =>
      state.map((todo) => {
        if (todo === action.payload) {
          return { ...todo, ...action.payload };
        }
        return todo;
      }),
  },
});
