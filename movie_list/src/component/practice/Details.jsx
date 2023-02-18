import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const list = [
  { id: 1, text: "게시글 내용입니다." },
  { id: 2, text: "리액트 라우터를 공부중입니다." },
  { id: 3, text: "라우터 어렵습니다." },
  { id: 4, text: "네." },
];

function Details() {
  const { id } = useParams(); // path 파라미터를 가지고 올 수 있다.
  const [searchParams] = useSearchParams(); // 주소창에 있는 값을 가져올때 사용

  console.log(searchParams.get("name"));
  //   const params = useParams(); // path 파라미터를 가지고 올 수 있다.
  const post = list.find((item) => item.id === parseInt(id));
  //   console.log(params.id);
  return (
    <div>
      <h1>상세보기 {id} </h1>
      {post.text}
    </div>
  );
}

export default Details;
