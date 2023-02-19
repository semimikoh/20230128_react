import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../redux/counter";

function Counter() {
  // 관리되고 있는 여러개의 상태 중에 선택한다.
  // => 상태값을 선택하는 콜백에 전달한다.
  // => selector 함수로는 순수 함수가 전달되어야한다.
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch(); // dispatch함수 받아오기

  console.log(count);
  return (
    <div>
      <p>{count}</p>
      {/* <button onClick={() => dispatch({ type: "increase" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-1</button> */}
      <button onClick={() => dispatch(increase(2))}>+1</button>
      <button onClick={() => dispatch(decrease(3))}>-1</button>
    </div>
  );
}

export default Counter;
