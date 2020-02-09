import React, { useState, useEffect } from 'react';
import './App.scss';

const cn = (...c) => c.filter(x => x).join(' ');

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const intervalId = window.setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => window.clearInterval(intervalId);
    }
  }, [isPaused]);

  const displaySeconds = (seconds % 60).toString().padStart(2, '0');
  const displayMinutes = Math.floor(seconds / 60).toString().padStart(2, '0');

  return (
    <div className="app">
      <div className={cn('time-circle', isPaused && 'paused')}>
        <div className="time">
          {displayMinutes}:{displaySeconds}
        </div>
      </div>
      <div className="buttons">
        {isPaused
         ? (
           <button
             className="play-pause"
             onClick={() => setIsPaused(false)}>
             <i className="fa fa-play fa-2x" />
           </button>
         )
         : (
           <button
             className="play-pause"
             onClick={() => setIsPaused(true)}>
             <i className="fa fa-pause fa-2x" />
           </button>
         )
        }
        <button
          className="reset"
          disabled={isPaused && seconds === 0}
          onClick={() => {
            setIsPaused(true);
            setSeconds(0);
          }}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default App;

// Note, the above method is susceptible to being innacurate due to the
// clearInterval not being guaranteed to execture every 1000 milliseconds, and
// it takes some execution time. A better method would be to keep track of the
// initial time (in milliseconds)

// const [startTime, setStartTime] = useState(Date.now()); 

// And have the interval tick every ~1000 miliseoncds, but use the updated JS time
// window.setInterval(() => {
//   setSeconds(Math.floor((Date.now() - startTime) / 1000));
// }, 1000)
// 
// This way, if a render takes a really long time our count is never skewed.
// You would require additional logic to handle pausing, which is why I didn't
// do it this way for the tutorial. Or, you could keep track of the time since
// the last tick.

// If you're reading this, you should give it it shot.
