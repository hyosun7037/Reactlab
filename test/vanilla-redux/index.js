import { createStore } from "redux";

// DOM 레퍼런스 설정
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 이름(문자열 형태)
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수
// 액션 객체는 type값을 반드시 갖고 있어야함,
// 추후 상태 업데이트 시 참고하고 싶은 값은 마음대로 넣기 가능
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초깃값 설정(숫자, 문자열, 객체 모두 가능)
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 맨 처음 호출 될 때는 state 값이 undefined
// 리듀서에서는 상태의 불변성을 유지하면서 데이터에 변화를 일으켜 줘야함!
// 만약 객체의 구조가 복잡해지거나 배열을 함께 다루면 immer라이브러리 사용
// state가 undefined일  때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
  // action.type에 따라 다른 작업을 처리함
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(reducer);

// render 함수 : 상태가 업데이트될 때마다 호출
const render = () => {
  const state = store.getState(); // 현재 상태 불러오기
  // 토글처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

// 액션 발생시키기
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};

render();

// 스토어의 상태가 바뀔 때마다 render가 호출
store.subscribe(render);
