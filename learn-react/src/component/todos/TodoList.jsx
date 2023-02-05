import React, { useContext, useMemo } from "react";
import { useTodoDispatch, useTodoState } from "../../context/todos";
import { TodoDispatchContext, TodoStateContext } from "./Todos";

function CountUndoneTodo(todo) {
  console.log("안할 일 세는 중");
  return todo.filter((todo) => !todo.done).length;
}

function TodoList({ onRemove, onToggle }) {
  const todos = useTodoState();

  const undoneCount = useMemo(() => {
    //의존성 배열에 있는 값이 변했을 때에만 다시 연산한다.
    return CountUndoneTodo(todos);
  }, [todos]);
  return (
    <div>
      해야할일 : {undoneCount}
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo, onRemove, onToggle }) {
  const dispatch = useTodoDispatch();

  return (
    <li>
      <span
        style={{ textDecoration: todo.done && "line-through" }}
        onClick={() => dispatch({ type: "toggle", id: todo.id })}
        // onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch({ type: "remove", id: todo.id })}>
        삭제
      </button>
    </li>
  );
}

// React.memo: 컴포넌트가 받는 props가 변경되었을때만 렌더링이 다시 일어난다
export default React.memo(TodoList);
