import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className='time-circle'>
        <div className="time">
          00:04
        </div>
      </div>
      <div className="buttons">
        <button className="play-pause">
          <i className="fa fa-play fa-2x" />
        </button>
        <button className="play-pause">
          <i className="fa fa-pause fa-2x" />
        </button>
        <button className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
