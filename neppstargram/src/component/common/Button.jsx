import styled, { css } from "styled-components";

const Button = styled.button`
  ${({ width, bgColor, color }) => css`
    width: ${width || 200}px;
    height: 27px;
    border: none;
    outline: none;
    padding: 5px;
    background-color: ${bgColor || "#5147df"};
    color: ${color || "#fff"};
    border-radius: 5px;
    cursor: pointer;
  `}
`;

export default Button;
