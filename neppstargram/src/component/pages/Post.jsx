import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { getPostByID } from "../../api/post";
import Button from "../common/Button";
import UserProfileBox from "../common/UserProfileBox";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const [index, setIndex] = useState(0);

  const { data, isLoading, error } = post;

  const fetchData = useCallback(async () => {
    const data = await getPostByID(id);
    setPost({
      data,
      isLoading: false,
      error: null,
    });
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  //   useEffect

  if (isLoading) return <div> 로딩중</div>;

  const handleIndex = (operand) => {
    if (!(operand + index < 0) && !(operand + index > data.img_list.length - 1))
      setIndex(index + operand);
  };
  return (
    <Container>
      <Wrapper>
        <SlideBox>
          <SlideList index={index}>
            {data.img_list.map((img) => (
              <SlideItem>
                <img src={img.url} alt="/" />
                {/* <ArrowButton onClick={() => handleIndex(+1)}>+1</ArrowButton>
                <ArrowButton onClick={() => handleIndex(-1)}>-1</ArrowButton> */}
              </SlideItem>
            ))}
          </SlideList>
        </SlideBox>
        <Button onClick={() => handleIndex(+1)}>+1</Button>
        <Button onClick={() => handleIndex(-1)}>-1</Button>
        <UserProfileBox author={data.author} />
        <p>{data.body}</p>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    padding: 5px;
  }
`;

const Wrapper = styled.div``;

const SlideBox = styled.ul`
  width: 500px;
  height: 500px;
  overflow: hidden;
`;

const SlideList = styled.ul`
  display: flex;
  transform: translateX(${({ index }) => index * -100}%);
  transition: transfrom 0.4s;
`;

const SlideItem = styled.li`
  width: 100%;
  height: 500px;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

// const ArrowButton = styled.button`
//   /* position: absolute; */
//   display: flex;
//   /* flex: 2; */
//   left: 0;
//   top: 0;
//   content: "";
//   width: 50px; /* 사이즈 */
//   height: 50px; /* 사이즈 */
//   border-top: 5px solid #000; /* 선 두께 */
//   border-right: 5px solid #000; /* 선 두께 */
//   transform: rotate(225deg);

// `;

export default Post;
