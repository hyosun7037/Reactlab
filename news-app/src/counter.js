import React, { Component } from "react";

class counter extends Component {
  // 비동기 처리시 componentDidMount() 사용, 렌더 직후 최초 한번만 호출, state값 변경시에는 호출되지 않음!
  // 리액트 virtual 박스가 이전 값과 현재 값을 비교해서 같으면 그림을 안그리고 false
  // 다르면 그림을 다시 그림 true
  // 호출시점은 최초 render시에는 실행 안되고 리렌더링시부터 실행됨
  render() {
    return <div></div>;
  }
}

export default counter;
