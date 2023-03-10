import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/todoSlice";

// import { createTodo } from "../redux/todos";

function TodoInput() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  //   console.log(nextId);

  const handleText = (e) => setText(() => e.target.value);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(create(text));
  //     setText("");
  //     console.log(todos);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    dispatch(createTodo(text));
    console.log(createTodo().payload);
  };

  {
    /* <p>{text} </p> */
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleText} value={text} />
        <button>input</button>
      </form>
    </div>
  );
}

export default TodoInput;
