import React, { useContext, useRef, useState } from "react";
import { useTodoDispatch } from "../../context/todos";

function TodoCreate({ onSubmit }) {
  const [text, setText] = useState("");
  const nextId = useRef(4);
  const dispatch = useTodoDispatch();

  const handleText = (e) => setText(() => e.target.value);

  const hadleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "create", id: nextId.current++, text });
  };

  return (
    <div>
      <form onSubmit={hadleSubmit}>
        <input type="text" onChange={handleText} value={text} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default React.memo(TodoCreate);
