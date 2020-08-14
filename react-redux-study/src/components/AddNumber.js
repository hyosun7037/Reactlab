import React from 'react';

const AddNumber = (props) => {
  return (
    <div>
      <h1>Add Number</h1>
      <button onClick={props.onAdd}>클릭</button>
    </div>
  );
};

export default AddNumber;
