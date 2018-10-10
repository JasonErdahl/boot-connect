import React, { Component } from 'react';
import Profilecard from './components/Members/ProfileCard/ProfileCard';
import Jobboard from './components/Dashboard/JobBoard/Jobboard';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <Profilecard></Profilecard> */}
          {/* <Jobboard></Jobboard> */}
         <Login></Login>
      </div>
    );
  }
}

export default App;
