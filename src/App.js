import React, { Component } from 'react';
import './App.css';
import GreenWeb from './components/GreenWeb/GreenWeb';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to GreenScreen</h2>
        <iframe src="https://map.openchargemap.io/?mode=embedded" frameborder="0" height="500px" width="800px" >Map</iframe>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <GreenWeb />
      </div>
    );
  }
}

export default App;
