import styled from "styled-components";
// import imgLogo from "../../img/noneProfile.jpg";

function UserProfileBox({ author }) {
  //   const noneProfile = "img\1361876.png";
  //   console.log(author.profile_url && imgLogo);
  //   console.log(null);
  return (
    <Container>
      <ImgBox>
        <img src={author.profile_url} alt="/" />
        {/* <img src={noneProfile} alt="/" /> */}
      </ImgBox>
      <UserName>{author.name}</UserName>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid #918a8a;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  img {
    width: 100%;
  }
`;

const UserName = styled.div`
  /* font-size: 1.2rem; */
  font-weight: 600;
`;

export default UserProfileBox;
