import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router";
import PostEdit from "./PostEdit";

function Post() {
  const [posts, setPosts] = useState({
    isLoding: true,
    data: null,
    isError: false,
  });

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/posts");
    setPosts({
      isLoding: false,
      data,
      isError: false,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Post</h1>
      <Outlet context={{ posts }} />
    </div>
  );
}

export default Post;
