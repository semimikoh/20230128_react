import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/common/Header";
import MainSection from "./component/common/MainSection";
import Auth from "./component/pages/Auth";
import Edit from "./component/pages/Edit";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Profile from "./component/pages/Profile";
import Search from "./component/pages/Search";
import SignUp from "./component/pages/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        {/* 로그인이 안된 페이지*/}
        <Route path="/" element={<MainSection />}>
          <Route path="" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<Search />} />
          <Route path="edit" element={<Edit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
