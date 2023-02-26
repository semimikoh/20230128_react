import styled, { css } from "styled-components";

const Input = styled.input`
  ${({ width }) => css`
    width: ${width || 200}px;
    border: 1px solid grey;
    padding: 5px;
    outline: none;
    border-radius: 5px;
  `}
`;

export default Input;
