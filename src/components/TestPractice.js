import React, { Fragment, useRef, useState, useCallback } from "react";

const TestPractice = () => {
  const intervalRef = useRef(null);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [resumeFromSeconds, setResumeFromSeconds] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const [clockTime, setClockTime] = useState("00:00");

  const resetClock = useCallback(() => {
    clearInterval(intervalRef.current);
    setClockTime("00:00");
    setIsPause(false);
  }, []);

  const startClock = useCallback(
    (seconds) => {
      intervalRef.current = setInterval(() => {
        const counter = seconds--;
        if (counter >= 0) {
          let minutes = Math.floor(counter / 60);
          let seconds = counter % 60;
          if (minutes < 10) {
            minutes = `0${minutes}`;
          } else {
            minutes = `${minutes}`;
          }
          if (seconds < 10) {
            seconds = `0${seconds}`;
          } else {
            seconds = `${seconds}`;
          }
          setResumeFromSeconds(counter);
          setClockTime(`${minutes}:${seconds}`);
        } else {
          resetClock();
        }
      }, 1000);
    },
    [resetClock]
  );

  const pauseResumeClock = useCallback(
    (pause) => {
      if (pause) {
        clearInterval(intervalRef.current);
        setIsPause(true);
      } else {
        startClock(resumeFromSeconds - 1);
        setIsPause(false);
      }
    },
    [resumeFromSeconds]
  );

  const getTimeInSeconds = useCallback(() => {
    clearInterval(intervalRef.current);
    console.log("minute",minute)
    console.log("second",second)
    let timeInSeconds = parseInt(minute) * 60 + parseInt(second);
    startClock(timeInSeconds);
  }, [minute, second]);

  return (
    <Fragment>
      <label>
        <input
          onChange={(e) => setMinute(e.target.value)}
          value={minute}
          className="border"
          type="number"
        />
        Minutes
      </label>
      <label>
        <input
          onChange={(e) => setSecond(e.target.value)}
          value={second}
          className="border"
          type="number"
        />
        Seconds
      </label>

      <button className="px-4" onClick={getTimeInSeconds}>START</button>
      <button className="px-4" onClick={() => pauseResumeClock(!isPause)}>PAUSE / RESUME</button>
      <button className="px-4" onClick={resetClock}>RESET</button>

      <h1 data-testid="running-clock">{clockTime}</h1>
    </Fragment>
  );
};

export default TestPractice;
