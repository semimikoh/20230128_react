import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { tmdbAxios } from "../../api/tmdb";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const poster_url = "https://image.tmdb.org/t/p/w500" + movie?.poster_path;

  useEffect(() => {
    tmdbAxios.get("/movie/" + id).then((res) => setMovie(res.data));
  }, [id]);

  console.log(movie);

  if (!movie) return <div>로딩중...</div>;

  return (
    <Container>
      <ImageBox>
        <img src={poster_url} alt="" />
      </ImageBox>
      <Title>{movie.title}</Title>
    </Container>
  );
}

export default MovieDetail;

const Container = styled.div`
  width: 900px;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 450px;
  overflow: hidden;
  /* img {
    height: 100%;
  } */
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;
