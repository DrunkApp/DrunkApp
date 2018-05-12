import React, { Component } from 'react';

import './App.css';
import Pagos from './components/Pagos/Pagos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"></h1>
        </header>
        <Pagos/>
        
      </div>
    );
  }
}

export default App;
