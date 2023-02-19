const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increase = (amount = 1) => {
  return {
    type: INCREASE,
    amount,
  };
};

export const decrease = (amount = 1) => {
  return {
    type: DECREASE,
    amount,
  };
};

// 상태값 0, 더하기, 빼기 리듀서 함수 작성해보기
export function countReducer(state = 0, action) {
  switch (action.type) {
    case INCREASE:
      return state + action.amount;
    case DECREASE:
      return state - action.amount;
    default:
      return state;
  }
}
