import axios from "axios";
import { useEffect, useState } from "react";

function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({
    isLoding: true,
    data: null,
    isError: false,
  });

  const fetchData = async () => {
    //  await : Promise가 resolve 되기 전까지 다음 코드가 실행되지 않는다.
    const res = await fetch("http://localhost:5000/todos/"); // fetch는 기본적으로 get을 요청한다
    const data = await res.json();
    setTodos({
      isLoding: false,
      data,
      isError: false,
    });
    // console.log(data);
  };

  //   useEffect(() => {
  //     fetch("http://localhost:5000/todos")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);
  const handleSunmit = async () => {
    try {
      /* const res = await fetch("http://localhost:5000/todos", {
        method: "Post",
        body: JSON.stringify({
          text,
          daone: false,
        }),
        Headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();*/
      setTodos({
        ...todos,
        isLoding: true,
      });

      await axios.post("http://localhost:5000/todos/", {
        text,
        done: false,
      });
      await fetchData();
    } catch (e) {
      console.log("d");
    }
  };

  const handleRemove = async (id) => {
    // await axios.delete("http://localhost:5000/todos" + id);
    await axios.delete("http://localhost:5000/todos/" + id);
    await fetchData();
  };

  const handleToggle = async (id, done) => {
    try {
      const rest = await axios.patch("http://localhost:5000/todos/" + id, {
        done,
      });
      console.log(rest.data);

      await fetchData();
    } catch (e) {
      setTodos({
        isLoding: false,
        data: todos.data,
        isError: true,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (todos.isLoding) return <div>로딩중 ...</div>;
  if (todos.isError) return <div>에러 발생!</div>;

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSunmit}>등록</button>
      </div>
      <ul>
        {todos.data.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done && "line-through" }}
              onClick={() => handleToggle(todo.id, !todo.done)}
            >
              {" "}
              {todo.text}
            </span>
            {"  "}
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
{
}
