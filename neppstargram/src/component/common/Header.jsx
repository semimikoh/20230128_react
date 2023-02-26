import styled from "styled-components";
import {
  RiHome4Line,
  RiSearchLine,
  RiUserLine,
  RiEdit2Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const iconSize = 24;
const iconColor = "grey";
const icons = [
  {
    id: "home",
    icon: <RiHome4Line size={iconSize} color={iconColor} />,
    url: "/",
  },
  {
    id: "search",
    icon: <RiSearchLine size={iconSize} color={iconColor} />,
    url: "/search",
  },
  {
    id: "edit",
    icon: <RiEdit2Line size={iconSize} color={iconColor} />,
    url: "/edit",
  },
  {
    id: "profile",
    icon: <RiUserLine size={iconSize} color={iconColor} />,
    url: "/profile",
  },
];

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>Neppstagram</Logo>
        <Input type="text" />
        <Gnb>
          <ul>
            {icons.map((e) => (
              <li key={e.id}>
                <Link to={e.url}>{e.icon}</Link>
              </li>
            ))}
          </ul>
        </Gnb>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  /* display: flex; */
  padding: 10px 0;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;

  /* justify-content: center;
  justify-content: space-between;

  align-items: center; */
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`;

const Input = styled.input``;

const Logo = styled.h2``;

const Gnb = styled.nav`
  ul {
    display: flex;
    gap: 20px;
  }
`;

export default Header;
