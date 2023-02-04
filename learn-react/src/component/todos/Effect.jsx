import { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [input, setinput] = useState("");

  // useeffct() : 생명주기에 따라서 실행될 사이드 이펙트(부수효과)를 콜백함수로 전다한다.
  //의존성 배열을 전달하지 않았을 때 : 렌더링 이후에 실현된다.
  useEffect(() => {
    console.log("렌더링");
  });

  //의존성 배열이 비었을 때: 화면에 처음 나타날 때 한 번만 실행된다.
  //   =>초기값 설정할 때, 라이브러리 연동, setTimeout 등

  useEffect(() => {
    console.log("마운트");
    return () => {
      console.log("언마운트");
    };
  }, []);
  // 의존성 배열에 전달된 값이 변경되었을때만 실행
  useEffect(() => {
    //변경된 후 실행
    console.log(count);
    return () => {
      //변경 직전 실행 => 값이 변경되어 렌더링되기 직전
      console.log(count);
    };
  }, [count]);

  return (
    <div>
      <h1>useEffect</h1>
      (count)
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div>
        <h2>{input}</h2>
        <input type="text" onChange={(e) => setinput(e.target.value)} />
      </div>
    </div>
  );
}

export default Effect;
