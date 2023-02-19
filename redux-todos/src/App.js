import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./component/Counter";
import Todos from "./component/Todos";
import { countReducer } from "./redux/counter";
import { todosReducer } from "./redux/todos";
import { todosToolkitReducer } from "./redux/todos_toolkit";

const store = configureStore({
  reducer: {
    counter: countReducer,
    todos: todosReducer,
    // todos: todosToolkitReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      <Todos />
    </Provider>
  );
}

export default App;
