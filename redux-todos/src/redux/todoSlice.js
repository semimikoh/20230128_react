import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [{ id: 1, text: "redux 배우기", done: false }],
  reducers: {
    createTodo(state, payload) {
      state.push(payload);
    },

    // remove() {},
  },
});

const todoSlice2 = createSlice({
  name: "todos",
  initialState: [{ id: 1, text: "redux 배우기", done: false }],
  reducers: {
    createTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            done: false,
            createdAt: new Date().toDateString(),
          },
        };
      },
    },
    removeTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
    },
  },
});

export const { createTodo, removeTodo, toggleTodo } = todoSlice2.actions;
export const todoReducer = todoSlice2.reducer;
