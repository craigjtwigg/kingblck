import BackgroundMP4 from './assets/kingblck-background.mp4';
import BackgroundWebM from './assets/kingblck-background.webm';
import Skull from './assets/kingblck-skull.png';
//import TextField from '@mui/material';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <video preload="auto" muted autoPlay loop id="background-video">
        <source src={BackgroundWebM} type="video/webm" />
        <source src={BackgroundMP4} type="video/mp4" />
      </video>
      <div className="content">
        <img src={Skull} alt="King Blck logo" />
      </div>
    </div>
  );
}

export default App;
