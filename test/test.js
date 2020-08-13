// A.js 화면 이벤트가 3개 있음.
// onChange, onInsert, onDelete
// A -> B -> C -> (D)
// 새로운 Store를 만들어서 전역적으로 함수 레퍼런스 보관, 찾을 때 action 명을 찾게 하기!

// 1번 액션 이름 생성
const ACHANGE = "a/CHANGE"; // action이름이 충돌나면 안되니까 a/를 붙여서 구분해주기(a가 들고 있는 함수)
const AINSERT = "a/INSERT";
const ADELETE = "a/DELETE";

// 2번 action을 함수로 호출할 수 있게 해야 됨.
const aChange = () => ({ type: "ACHANGE" }); // type으로 action값을 구분함
const aInsert = () => ({ type: "AINSERT" });
const aDelete = () => ({ type: "ADELETE" });

const initialState = {
  number: 0,
};

// 3번 Reducer 만들기 (state, action)
function aReducer(state = initialState, action) {
  switch (action.type) {
    case aChange:
      return {
        number: state.number + 10,
      };
    case aInsert:
      return {
        number: state.number + 1,
      };
    case aDelete:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export { aChange };
export { aInsert };
export { aDelete };
export default aReducer;
