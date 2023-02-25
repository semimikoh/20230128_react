import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const navList = [
  { id: 1, text: "Movie", url: "/movie" },
  { id: 2, text: "TV", url: "/tv" },
  { id: 3, text: "people", url: "/people" },
];

function Header() {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link to="/"> Nepp Movie</Link>
        </Logo>
        <Gnb>
          <ul>
            {navList.map((e) => (
              <li key={e.id} style={{ fontWeight: pathname === e.url && 700 }}>
                <Link to={e.url}> {e.text} </Link>
              </li>
            ))}
          </ul>
        </Gnb>

        {/* <li style={{fontWeight:pathname ===e.url&&700}}>
                   <Link to={e.url}> {e.text} </Link>
                 </li>; */}
        <input type="text" />
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  padding: 10px 20px;
  border-bottom: 1px solid #bbb;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  max-width: 900px;
  flex: 1;
  margin: 0 auto;
`;

const Logo = styled.h1``;

const Gnb = styled.nav`
  flex: 1;
  ul {
    display: flex;
    flex: 1;
    gap: 20px;
    margin-left: 30px;
  }
`;

export default Header;
