import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";

function PostList() {
  const { posts } = useOutletContext();

  const { data, isLoding } = posts;

  if (isLoding) return;
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={"post/" + item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
