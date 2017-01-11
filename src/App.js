import React, { Component } from 'react';
// import logo from './logo.svg';
import SimpleMapPage from './map/map'
import SearchBar from './searchbar/searchbar'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <SimpleMapPage className="map"/>
      </div>
    );
  }
}

export default App;
