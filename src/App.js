import React, { Component } from 'react';
import './App.css';

import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>ASALNA</h1>
        </header>
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App;
