// import { createAction } from "@reduxjs/toolkit";

// const creatTodo = createAction("todos/create");

// export function todosToolkitReducer(state = [], action) {
//   switch (action.type) {
//     case creatTodo.type: // 투두 리스트 추가하기
//       //   return [...state, { id: action.id, text: action.text, done: false }];
//       return produce(state, (draft) => {
//         draft.push({ id: action.id, text: action.text, done: false });
//       });
//     case REMOVE: // 투두 리스트 삭제하기
//       // 객체 하나만 지우는 경우 원본을 변겨아는 방식보다 filter가 간단하다.
//       return state.filter((todo) => todo.id !== action.id);
//     case TOGGLE: // 이미 한 거 체크하기
//       //   return state.map((todo) => {
//       //     todo.id === action.id ? { ...todo, done: !todo.done } : todo;
//       //   });
//       return produce(state, (draft) => {
//         // 불변성을 신경쓰지 않아도 돼서 찾아서 done값을 직접 변경
//         const todo = draft.find((todo) => todo.id === action.id);
//         todo.done = !todo.done;
//       });
//     default:
//       return state;
//   }
// }
