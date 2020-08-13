import React from "react";
import styled from "styled-components";
import black from "../images/black.jpg";

const Frame2Con = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 500px;
  margin-top: 100px;
  background-image: url(${black});
`;

const Frame2Img = styled.div`
  width: 20%;
  height: 300px;
  background-color: #f1f1f1;
  margin-right: 10px;
`;

const Frame2Text = styled.div`
  margin-left: 10%;
  font-weight: 100;
  width: 40%;
  font-size: 30px;
  color: #fff;
`;

const frame2Text = ["모나미는 언제나 당신의 기록과 함께합니다."];
class Section2 extends React.Component {
  render() {
    return (
      <>
        <Frame2Con>
          <Frame2Img></Frame2Img>
          <Frame2Img></Frame2Img>
          <Frame2Img></Frame2Img>
          <Frame2Text>{frame2Text}</Frame2Text>
        </Frame2Con>
      </>
    );
  }
}

export default Section2;
