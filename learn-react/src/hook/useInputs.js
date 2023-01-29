import { useState } from "react";

//src/hook/useInputs.js

export function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const handleForm = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const hadleReset = () => {
    setForm(initialForm);
  };

  return [form, handleForm, hadleReset];
}
