import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + state.amount };
    case "decrease":
      return { ...state, count: state.count - state.amount };
    case "change_amount":
      return { ...state, amount: action.amount };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    amount: 4,
  });

  const handleAmount = (e) =>
    dispatch({ type: "change_amount", amount: e.target.value });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>
        +{state.amount}
      </button>
      <button onClick={() => dispatch({ type: "decrease" })}>
        -{state.amount}
      </button>
      <input type="number" onChange={handleAmount} />
    </div>
  );
}

export default Counter;
