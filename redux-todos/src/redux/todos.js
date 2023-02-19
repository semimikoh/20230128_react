import { nanoid } from "@reduxjs/toolkit";
import produce from "immer";
import { useRef } from "react";

const initalState = [
  { id: 1, text: "리덕스 배우기", done: true },
  { id: 2, text: "리덕스 응용하기", done: false },
  { id: 3, text: "리덕스 투두리스트 만들기", done: false },
];
console.log(initalState.length);
const CREACTE = "CREATE";
const REMOVE = "REMOVE";
const TOGGLE = "TOGGLE";

let nextId = initalState.length + 1;
// console.log(nextId.current);

export const createTodo = (text) => {
  return {
    type: CREACTE,
    // id: nanoid(),
    id: nextId++,
    text,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE,
    id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE,
    id,
  };
};

export function todosReducer(state = initalState, action) {
  switch (action.type) {
    case CREACTE: // 투두 리스트 추가하기
      //   return [...state, { id: action.id, text: action.text, done: false }];
      return produce(state, (draft) => {
        draft.push({ id: action.id, text: action.text, done: false });
      });
    case REMOVE: // 투두 리스트 삭제하기
      // 객체 하나만 지우는 경우 원본을 변겨아는 방식보다 filter가 간단하다.
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE: // 이미 한 거 체크하기
      //   return state.map((todo) => {
      //     todo.id === action.id ? { ...todo, done: !todo.done } : todo;
      //   });
      return produce(state, (draft) => {
        // 불변성을 신경쓰지 않아도 돼서 찾아서 done값을 직접 변경
        const todo = draft.find((todo) => todo.id === action.id);
        todo.done = !todo.done;
      });
    default:
      return state;
  }
}
