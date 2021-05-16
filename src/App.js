import React, { useState } from "react";
import './index.css';
const App = () => {
  let NewTime = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(NewTime);

  const ChangeTime = () => {
    let NewTime = new Date().toLocaleTimeString();
    setCurrentTime(NewTime);
  };
  setInterval(ChangeTime, 1000);
  return (
    <div id="div">
      <h1 id="heading">{currentTime}</h1>
    </div>
  );
};

export default App;
