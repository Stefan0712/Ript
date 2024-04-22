import React, { useState, useEffect } from "react";
import arrowIcon from '../icons/arrow.png';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const [lapStartTime, setLapStartTime] = useState(null);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setLapStartTime(time);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    setLapStartTime(null);
  };

  const handleLap = () => {
    const lapTime = time - lapStartTime;
    setLaps(prevLaps => [...prevLaps, lapTime]);
    setLapStartTime(time);
  };

  const formatTime = (seconds) => {
    const pad = (num) => (num < 10 ? '0' + num : num);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  return (
    <div id="stopwatch-page">
      <div className="page-header">
        <a href='#'><img src={arrowIcon} alt='back button'></img></a>
        <h3>Stopwatch</h3>
      </div>
      <div className="stopwatch-body section-container">
        <div className="time">{formatTime(time)}</div>
        <div className="lap-time">{formatTime(time - lapStartTime)}</div>
        <div className="buttons">
          <button onClick={isRunning ? handlePause : handleStart}>
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleLap}>Lap</button>
        </div>
      </div>
      <div className="laps-container">
        {laps.map((lap, index) => (
          <div className="lap-body" key={index}>
            <p>Lap {index + 1}</p>
            <p>{formatTime(lap)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stopwatch;
