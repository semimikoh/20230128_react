import { createContext, useContext, useState } from "react";
import Todos from "./component/todos/Todos";
import { TodoProvider } from "./context/todos";

// 전역에 공유하고 싶은 값을 전달하는 컨테그트 생성
//  => 기본값은 Provider 밖에서 useContext했을 때 반환하는 값
export const CountContext = createContext(0);
export const SetCountContext = createContext(0);
function App() {
  return (
    <TodoProvider>
      <Todos />
    </TodoProvider>
  );
}

export default App;
