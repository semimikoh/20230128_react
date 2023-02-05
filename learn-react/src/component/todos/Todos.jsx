import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import {
  useRef,
  useEffect,
  useReducer,
  useState,
  useCallback,
  createContext,
} from "react";

// reducer의 리턴값이 상태로 업데이트 된다.
function reducer(state, action) {
  //   return [...state, { id: 4, text: "테스트", done: false }];
  //   return 0;

  switch (action.type) {
    case "create":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

const initialState = [
  { id: 1, text: "useEffect 배우기", done: true },
  { id: 2, text: "useReducer 배우기", done: false },
  { id: 3, text: "useCallback, UseMemo 배우기", done: false },
];

export const TodoStateContext = createContext(null);
export const TodoDispatchContext = createContext(null);

function Todos() {
  // useReducer (리듀서 함수, 초기값) => 상태값, 디스패치 함수 반환
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleText = (e) => setText(e.target.value);

  const nextId = useRef(4);

  const handleSubmit = useCallback(
    (text) => {
      dispatch({ type: "create", id: nextId.current++, text });
    },
    [text]
  );

  const handleRemove = useCallback((id) => {
    if (window.confirm("삭제하시겠습니까?")) dispatch({ type: "remove", id });
  }, []);

  const handleToggle = useCallback((id) => {
    dispatch({ type: "toggle", id });
  }, []);

  return (
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        <div>
          <TodoCreate onChange={handleText} onSubmit={handleSubmit} />
          <TodoList />
        </div>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default Todos;
