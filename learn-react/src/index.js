import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> </React.StrictMode> 성능 측정을 위해 2번 실행하는 태그
  <App />
);

// reportWebVitals();
