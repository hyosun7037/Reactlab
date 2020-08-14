import React, { useState } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

function App() {
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1);
  };

  return (
    <div className="container">
      <h1>Root</h1>
      {/* 이벤트 넘기기 */}
      {/* <AddNumberRoot onAdd={add} /> */}
      <AddNumberRoot add={add} />
      {/* state 넘기기 */}
      <DisplayNumberRoot />
    </div>
  );
}

export default App;
