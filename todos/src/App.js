import "./App.css"; // Webpack이라는 도구가 css, 이미지 파일 등 정적파일을 로딩할 수 있게 도와준다.
// import Button, { BigButton } from "./component/Button";
import TodoCreater from "./component/TodoCreater";
import TodoHeader from "./component/TodoHeader";
import TodoLIst from "./component/TodoList";
// import styles from "./style.module.css"; // id. class의 중복을 방지해준다.\
import styled, { createGlobalStyle } from "styled-components";
import Flex from "./component/Flex";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
}
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <TodoHeader />
      <TodoLIst />
      <TodoCreater />
      <Flex />
    </Container>
  );
}

const Container = styled.div`
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.border};
`;

export default App;
