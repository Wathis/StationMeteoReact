import React, { Component } from 'react';
import './App.css';
import StationMeteo from './StationMeteo';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
          <StationMeteo />
      </div>
    );
  } 
}

export default App;