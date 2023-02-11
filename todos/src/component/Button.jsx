import { darken, lighten } from "polished";
import styled, { css, keyframes } from "styled-components";

function Button({ text, bgColor, big }) {
  return (
    <StyledButton bgColor={bgColor} big={big}>
      {text}
    </StyledButton>
  );
}
const slideUp = keyframes`
from {
    transform: translateY(20px);
}
    
`;

const StyledButton = styled.button`
  width: 100px;
  padding: 5px 0;
  border-radius: 15px;
  /*bg컬러prop이 전달되면 적용하고, 아니면 main 컬러가 된다. */
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.main};
  //햅틱안에 있기 때문에 $표시로 자바스크립트 문법으로 바꿔줘야 한다
  //함수를 사용해서 할당해야함
  //props안에 있는 레드를 꺼내기 위헤 bgColor 찾아넴
  color: #fff;
  text-align: center;
  outline: none;
  border: none;

  cursor: pointer;
  user-select: none;

  /* animation: ${slideUp} 1s; */

  ${({ big }) =>
    big &&
    css`
      width: 120px;
      font-size: 1.2rem;
      padding: 1opx;
    `}
  &:hover {
    background-color: ${({ bgColor, theme }) => {
      return bgColor ? lighten(0.1, bgColor) : lighten(0.1, theme.colors.main);
    }};
  }

  &:hover {
    background-color: ${({ bgColor, theme }) => {
      return bgColor ? darken(0.1, bgColor) : darken(0.1, theme.colors.main);
    }};
  }
  & + & {
    margin-top: 10px;
  }
`;

export const BigButton = styled(StyledButton)`
  width: 200px;
  padding: 20px;
`;

export default Button;
