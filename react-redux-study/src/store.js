// 1번 액션 이름 생성
const INCREMENT = 'INCREMENT';

// 화면 변경할거면 액션명과 state를 넘겨야함! 아닐경우에는 액션명만 날리면 됨!!
// state 안넘기면 오류 나니까 초깃값 세팅
const initState = {
  number: 0,
};

// 2번 리듀서(state, action)
// action은 오브젝트 안에 type:"대문자 액션명" 이라는 파라미터를 들고 있어야함! 또한 데이터도 날릴 수 있음!
const reducer = (state = initState, action) => {
  console.log('INCREMENT 실행됨');
  if (action.type === INCREMENT) {
    return { number: state.number + 1 }; // setState의 역할
  } else {
    return state;
  }
};

export default reducer;
