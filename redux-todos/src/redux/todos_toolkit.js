import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";
import produce from "immer";

//createAction : 액션의 타입과 액션 생성 함수를 동시에 만든다.
// => 함수를 실행하면 인자는 payload라는 값으로, 액션의 타입은 자동처리 된다.action
// => 첫번째 인자는 고유한 키 값 (타입 값)
// => 두번째는 전달받은 payload값을 통해 새로운 객체를 생성할 수 있는 prepare 함수 전달
export const createTodo = createAction("todos/create", function (text) {
  return {
    payload: {
      id: nanoid(),
      text,
      done: false,
    },
  };
});

//값이 id 하나만 넘어가기 때문에 따로지정할 필요 없음
export const removeTodo = createAction("todos/remove");

export const toggleTodo = createAction("todos/toggle");

export const todoReducer = createReducer([], (builder) => {
  builder
    .addCase(createTodo, (state, action) => {
      //immer가 자동으로 적용되어 있다.
      state.push(action.payload);
    })
    .addCase(
      removeTodo,
      (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload);
        console.log(index);
        state.splice(index, 1);
      }
      //   state.filter((todo) => todo.id !== action.payload)
    )
    .addCase(toggleTodo, (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
    });
});

export function todosToolkitReducer(state = [], action) {
  switch (action.type) {
    case createTodo.type: // 투두 리스트 추가하기
      //   return [...state, { id: action.id, text: action.text, done: false }];
      return produce(state, (draft) => {
        draft.push(action.payload);
      });

    case removeTodo.type: // 투두 리스트 삭제하기
      // 객체 하나만 지우는 경우 원본을 변겨아는 방식보다 filter가 간단하다.
      return state.filter((todo) => todo.id !== action.payload);

    case toggleTodo.type: // 이미 한 거 체크하기
      //   return state.map((todo) => {
      //     todo.id === action.id ? { ...todo, done: !todo.done } : todo;
      //   });
      return produce(state, (draft) => {
        // 불변성을 신경쓰지 않아도 돼서 찾아서 done값을 직접 변경
        const todo = draft.find((todo) => todo.id === action.payload);
        todo.done = !todo.done;
      });
    default:
      return state;
  }
}
