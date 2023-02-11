import styled from "styled-components";

function TodoHeader(params) {
  return (
    <Container>
      <DateText>2023년 2월 5일</DateText>
      <CountText>해야할 일 : 1/3</CountText>
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.colors.border};
  padding: 10px;
  /* display: flex; */
`;

const DateText = styled.p`
  font-size: 1.4rem;
  padding-right: 20px;
`;

const CountText = styled.p`
  font-size: 0.8rem;
  color: #888;
`;

export default TodoHeader;
