import { useState } from "react";

export function useInput(inital) {
  const [inputs, setInputs] = useState(inital);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return [inputs, handleInputs];
}
