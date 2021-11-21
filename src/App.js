import './App.css';
import React from 'react';
import { Form } from './Form';
import Skull from './Skull'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { submitComplete: false};
    } 

    toggleSubmit = () => {
      this.setState(
        {
          submitComplete: !this.state.submitComplete,
        }
      )
    }

    render(){
      const { submitComplete } = this.state;
      const toggleSubmit = this.toggleSubmit
        return (
 
        submitComplete ? <Skull/> :  <Form toggleSubmit={toggleSubmit} submitComplete={submitComplete}/>
    
  );
    }

}

export default App;
