import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child/Child';
import Show from './Show/Show';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Child />
          <Show />
      </div>
    );
  }
}

export default App;
