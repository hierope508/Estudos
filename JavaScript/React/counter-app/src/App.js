import './App.css';
import NaviBar from './components/naviBar'
import Counters from './components/counters';
import React, { Component } from 'react'; 

function App() {
  return (
      <React.Fragment>
        <NaviBar/>
        <Counters/>
      </React.Fragment>    
  );
}

export default App;
