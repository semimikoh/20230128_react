import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPosts } from "../../api/post";

function Home() {
  const [posts, setPosts] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const { data, isLoading, error } = posts;

  const fetchData = useCallback(async () => {
    const data = await getPosts(1);

    setPosts({
      data,
      error: null,
      isLoading: false,
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) return <div> 로딩중</div>;
  return (
    <div>
      <PostLists>
        {data.map((item) => (
          <PostList key={item.id} item={item} />
        ))}
      </PostLists>
    </div>
  );
}

function PostList({ item }) {
  const { img_list, id } = item;

  return (
    // <Container>
    <PostContent>
      <Link to={`/posts/${id}`}>
        <img src={img_list[0].url} alt="/" />
      </Link>
    </PostContent>
    // </Container>
  );
}

// const Container = styled.div`
//   display: flex;
//   /* flex-direction: column; */
//   justify-content: center;
//   align-items: center;
//   flex: 1;
//   flex-wrap: wrap;
// `;

const PostLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const PostContent = styled.li`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
`;
export default Home;
