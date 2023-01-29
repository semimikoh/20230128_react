import { useState } from "react";
import { useRef } from "react";

const todoList = [
  { id: 1, text: "컴포넌트 만들기", done: true },
  { id: 2, text: "상태 관리하기", done: false },
  { id: 3, text: "배열 렌더링하기", done: false },
];

function TodoList() {
  const [todos, setTodos] = useState(todoList);
  const [input, setInput] = useState("");

  const nextId = useRef(4); // 렌더링과 별개로 기억되는 변수
  const inputRef = useRef();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 태그의 기본 기능을 막는다

    if (input === "") return; // input이 빈 문자일때 함수 종료.

    // 기존의 todos 배열을 새로운 배열에 복사하고 마지막에 새로운 요소를 추가한다.
    //  => 기존 배열과 다른 새로운 배열을 만들어서 불변성 유지

    // setTodos([...todos, { id: nextId.current++, text: input, done: false }]);
    setTodos(todos.concat({ id: nextId.current++, text: input, done: false }));

    setInput("");
    inputRef.current.focus();
  };

  const handleRemove = (id) => {
    console.log(id);
    console.log(todos.id);
    if (window.confirm("삭제하시겠습니까"))
      //선택한 id가 아닌 요소들만 모으기
      setTodos(todos.filter((el) => el.id !== id));
  };

  const handleToggle = (id) =>
    setTodos(
      todos.map((el) => (el.id === id ? { ...el, done: !el.done } : el))
    );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          value={input}
          ref={inputRef}
        />
        <button>등록</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.done && "line-through",
              userSelect: "none",
            }}
            onClick={() => handleToggle(todo.id)}
          >
            <span> {todo.text} </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(todo.id);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
