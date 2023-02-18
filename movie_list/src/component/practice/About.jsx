import { Link, Route, Routes } from "react-router-dom";
import Details from "./Details";

function About() {
  return (
    <div>
      <h1>About</h1>
      <Routes>
        <Route path="" element={<AboutList />} />
        <Route path=":id" element={<Details />} />
      </Routes>
    </div>
  );
}

const AboutList = () => {
  return (
    <ul>
      <li>
        <Link to="1">게시글1</Link>
      </li>{" "}
      <li>
        <Link to="2">게시글2</Link>
      </li>{" "}
      <li>
        <Link to="3">게시글3</Link>
      </li>
    </ul>
  );
};

export default About;
