import React from "react";
import about_main from "../images/about_main.jpg";
import styled from "styled-components";

const MainSlider = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${about_main});
  background-size: cover;
`;

class Main extends React.Component {
  render() {
    return (
      <>
        <MainSlider></MainSlider>
      </>
    );
  }
}

export default Main;
