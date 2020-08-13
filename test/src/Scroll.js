import React, { Component } from "react";
import styled from "styled-components";

const Box = styled.div`
  border: 1px solid black;
  height: 300px;
  width: 300px;
  overflow: auto;
  position: relative;
`;

const InnerBox = styled.div`
  width: 100%;
  height: 650px;
  background: linear-gradient(white, black);
`;

class Scroll extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    return (
      <Box
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <InnerBox />
      </Box>
    );
  }
}

export default Scroll;
