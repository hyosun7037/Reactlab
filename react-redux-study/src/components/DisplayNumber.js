import React from 'react';

const DisplayNumber = (props) => {
  return (
    <div>
      <h1>Display Number</h1>
      <h2>값 : {props.number}</h2>
    </div>
  );
};

export default DisplayNumber;
