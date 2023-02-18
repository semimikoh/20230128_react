import { Route, Routes } from "react-router";
import Post from "./component/Post";
import PostEdit from "./component/PostEdit";
import PostList from "./component/PostList";
import About from "./component/practice/About";
import Header from "./component/practice/Header";
import Home from "./component/practice/Home";
import Todos from "./component/Todos";

function App() {
  return (
    <div>
      {/* <Todos /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<div>나타나라</div>} />
        </Route>
        <Route path="about/*" element={<About />} />
        <Route path="post" element={<Post />}>
          <Route path="" element={<PostList />} />
          <Route path="edit" element={<PostEdit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
