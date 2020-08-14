// import React from 'react';
import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

const actionProps = (dispatch) => {
  // action만 때림! reducer의 action 부분을 호출해줌
  return {
    onAdd: () => {
      dispatch({ type: 'INCREMENT' });
    },
  };
};

// store에 연결 - 구독하기
// AddNumber를 리턴
// AddNumber에게 props를 두개 넘겨줄 수 있음! (  ,  )
// 1번 파라미터 state
// 2번 파라미터 evnet
export default connect(null, actionProps)(AddNumber);
