import { useInputs } from "../hook/useInputs";

function Inputs() {
  const [inputs, handleinputs, reset] = useInputs({
    name: "",
    email: "",
  });

  return (
    <div>
      <p>
        {inputs.name} {inputs.email}
      </p>
      <input type="text" onChange={handleinputs} name="name" />
      <input type="text" onChange={handleinputs} name="email" />
      <button onClick={reset}>초기화</button>
    </div>
  );
}

export default Inputs;
