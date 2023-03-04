import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../api/post";

function Edit() {
  const [inputs, setInputs] = useState({
    files: [],
    body: "",
  });

  const navigate = useNavigate();

  const handleBody = (e) => {
    setInputs({
      ...inputs,
      body: e.target.value,
    });
  };

  const handleFiles = (e) => {
    setInputs({
      ...inputs,
      files: e.target.files,
    });
  };

  const handleSubmit = async () => {
    const { files, body } = inputs;
    const data = await createPost(files, body);
    setInputs({
      files,
      body,
    });

    console.log(data);
    if (data) {
      alert("게시물이 등록되었습니다.");
      navigate(`/posts/${data.id}`);
    }
  };
  return (
    <div>
      <div>
        <input type="file" accept="image/*" multiple onChange={handleFiles} />
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={handleBody}
      ></textarea>
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}

export default Edit;
