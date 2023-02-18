import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function PostEdit() {
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log(e.target);

    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    const { data } = await axios.post("http://localhost:5000/posts", inputs);
    navigate("/post/" + data.id);
  };
  return (
    <div>
      <input type="text" name="title" onChange={handleInput} />
      <input type="text" name="body" onChange={handleInput} />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}

export default PostEdit;
