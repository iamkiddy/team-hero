import React, { Component } from 'react';
import './App.css';

// importing search component
import Search from "./Search/Search";

class App extends Component {
  render () {
    return (
      <div className="container-lg">
        <Search />
      </div>
    )
  }
}

export default App;
