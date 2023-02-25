import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div>
      <img src={poster_url} alt="" />
      <div>{movie.title}</div>
    </div>
  );
}

export default MovieDetail;
