import { useState } from "react";

function InputText() {
  const [inputs, setInputs] = useState({
    name: "이름",
    email: "이메일",
  });
  //   const [text, setText] = useState("작성해주세요");

  const handleText = (e) => {
    console.log(e.target);
    // console.log(e.target);
    // console.log(e.target.name);
    const { name, value } = e.target;

    //상태 업데이트를 할 때는 기존 객체를 변경하면 안된다. => 불변성을 지켜야 한다
    setInputs({
      ...inputs, // 기존의 inputs 값을 펼치고, 일부분만 수정.
      [name]: e.target.value, // [name] = e.target.name 변수 name 말고 속성 name을 지칭
    });
  };

  //   console.log(inputs.name === inputs["name"]);
  return (
    <div>
      <p>
        {inputs.name} ({inputs.email})
      </p>
      <input type="text" onChange={handleText} name="name" />
      <input type="text" onChange={handleText} name="email" />
    </div>
  );
}

// inputs.name은 핸들러 함수를 통해 inputs.name의 값을 바꿔서 변하게 해줌
export default InputText;
