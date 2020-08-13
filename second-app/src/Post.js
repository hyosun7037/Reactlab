import React from "react";
import styled from "styled-components";

const PostBox = styled.div`
  margin: 0 auto;
  height: 100px;
  width: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;t
`;

const Post = (props) => {
  // 여기서 App.js에서 정의한 map 을 받음
  return <PostBox>{props.title}</PostBox>;
};

export default Post;
