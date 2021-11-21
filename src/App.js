import Skull from './assets/kingblck-skull.webp';
import './App.css';
import React from 'react';
import { Form } from './Form';

function App() {
  return (
    <div className="App">
      <div className="content">
        <img src={Skull} alt="King Blck logo" />
        <Form/>
      </div>
    </div>
  );
}

export default App;
