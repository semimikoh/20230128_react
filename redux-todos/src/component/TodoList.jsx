import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../redux/todoSlice";
import { toggleTodo } from "../redux/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // console.log(dispatch(toggle()));
  //   const todo = todo;
  //   console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        // console.log(todo);
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}

function TodoItem({ todo }) {
  const { id, text, done } = todo;
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleTodo(id));
  const handleRemove = () => dispatch(removeTodo(id));

  return (
    <li>
      <span
        style={{ textDecoration: done && "line-through" }}
        onClick={handleToggle}
      >
        {text}
      </span>{" "}
      <button onClick={handleRemove}>delete</button>
    </li>
  );
}
export default TodoList;
