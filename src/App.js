import React, { Component } from 'react';
import './App.css';
import HeaderNav from './components/HeaderNav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <div className="App-cushion"/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
