import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  height: 500px;
  display: flex;
`;

const FrameCon = styled.div`
  width: 35%;
  margin: 100px 10px 0 0;
`;

const FrameText = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
`;

const FrameImg = styled.div`
  margin-top: 20px;
  height: 300px;
`;

class Section1 extends React.Component {
  render() {
    const frameText = [
      {
        id: 1,
        title: "New Product1",
        image:
          "https://image.yes24.com/momo/TopCate2620/MidCate10/261994170.jpg",
      },
      {
        id: 2,
        title: "New Product2",
        image:
          "https://image.yes24.com/momo/TopCate2620/MidCate10/261994174.jpg",
      },
      {
        id: 3,
        title: "New Product3",
        image: "https://image.auction.co.kr/itemimage/1a/80/26/1a8026bdf6.jpg",
      },
    ];
    const frameList = frameText.map((frameList) => (
      <FrameCon key={frameList.id}>
        <FrameText>{frameList.title}</FrameText>
        <FrameImg>
          <img src={frameList.image} alt="콘텐츠이미지" />
        </FrameImg>
      </FrameCon>
    ));
    return (
      <>
        <Frame>{frameList}</Frame>
      </>
    );
  }
}

export default Section1;
