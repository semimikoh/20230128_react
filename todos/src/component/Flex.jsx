import styled from "styled-components";

function Flex() {
  return (
    <Container>
      <Item>Itemㅇㄴㄹㄴㅇㄹㅇㄴㄹ</Item>
      <Item>Item</Item>
      <Item>Item</Item>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row; // 아이템의 나열 방향
  justify-content: center; //주축에 대한 나열 방향
  align-items: center; // 교추착에 대한 나열 방향
  width: 500px;
  height: 300px;
  border: 3px solid red;
`;
const Item = styled.div`
  /* width: 100px; */
  height: 100px;
  background: black;
  flex-basis: 100px; // 아이템의 기본 너비이자 기준점

  color: #fff;
  border: 3px solid green;

  &:nth-child(1) {
    flex-grow: 1; //공간이 남았을 때 여백을 가져가는 비율
    flex-shrink: 0; // 공간이 부족할 때 줄이는 비율
  }
  &:nth-child(2) {
    flex-grow: 2;
  }
`;

export default Flex;
