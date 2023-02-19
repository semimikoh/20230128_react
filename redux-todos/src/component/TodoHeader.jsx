import { createSelector } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

const getTodos = (state) => state.todos;

//첫번째 인자로 전달받은 상태가 변하지 않으면 렌더링이 다시 일어나도 재계산이 일어나지 않는다.
const getUndoneCount = createSelector(getTodos, (state) => {
  console.log("계산중");
  return state.filter((todo) => !todo.done).length;
});

function TodoHeader() {
  // const todos = useSelector(getUndoneCount);
  // const todos = useSelector((state) => state.todos);
  // const undondeCount = todos.filter((todo) => !todo.done).length;

  const undondeCount = useSelector(getUndoneCount);
  const [input, setIput] = useState("");
  console.log(undondeCount);
  return (
    <div>
      <div> 투두 리스트</div>
      {/* <input type="text" onChange={(e) => setIput(e.target.value)} /> */}
    </div>
  );
}

export default TodoHeader;
