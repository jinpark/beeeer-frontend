import React, { Component } from 'react';

import GeoLocator from './geolocator'
import './searchbar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
      <GeoLocator />
      <span className="logo">beeeer</span>
      </div>
    );
  }
}

export default SearchBar;
