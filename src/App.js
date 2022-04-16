import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Countdown from './components/countdown-timer';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route path='/' exact component={Countdown}/>
      </React.Fragment>
    </Router>
  );
}

export default App;
