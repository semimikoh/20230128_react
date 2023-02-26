import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Auth() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgrey;
`;

export default Auth;
