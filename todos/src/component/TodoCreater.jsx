import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

function TodoCreater(params) {
  const [text, setText] = useState("");

  return (
    <Container>
      <Input type="text" />
      <Button text="submit"></Button>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  text-align: center;
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  padding: 5px;
  outline: none;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.border};
  margin-bottom: 5px;
`;
export default TodoCreater;
