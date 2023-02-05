import React, { useRef, useState } from "react";

function TodoCreate({ onSubmit }) {
  const nextId = useRef(4);

  const [text, settext] = useState("");

  const handleText = (e) => settext(() => e.target.value);

  const hadleSubmit = (e) => {
    e.preverntDefault();
    onSubmit(text);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={handleText} value={text} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default React.memo(TodoCreate);
