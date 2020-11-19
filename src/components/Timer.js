import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  // const [isActive, setIsActive] = useState(false);
  // const [counter, setCounter] = useState(0);
  return (
    <div className="timer-container">
      <div className="time">

        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setActive(true)} className="start">Start</button>
        <button onClick={() => null} className="reset">Reset</button>
      </div>
   </div>
  )
}

export default Timer;