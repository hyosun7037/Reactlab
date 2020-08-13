// 1. 액션 타입 지정(대문자 문자열 - 모듈이름/액션이름)
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 2. 액션 생성 함수 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 3. 초기 상태 리듀서 함수 만들기
const initialState = { number: 0 };

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

// 내보내기
export default counter;
