import { useDispatch, useSelector } from "react-redux";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todos() {
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  //   console.log(dispatch(toggle()));
  //   console.log(todo);

  return (
    <div>
      <TodoHeader />
      <TodoList todo={todo} />
      <TodoInput />
    </div>
  );
}

export default Todos;
