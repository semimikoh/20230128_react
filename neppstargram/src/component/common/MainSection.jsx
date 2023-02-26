import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

function MainSection() {
  return (
    <Container>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  min-height: 100vh;
`;

const OutletWrapper = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff;
  flex: 1;
  width: 100%;
`;

export default MainSection;
