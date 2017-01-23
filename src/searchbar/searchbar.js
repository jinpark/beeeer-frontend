import React, { Component } from 'react';

import GeoLocator from './geolocator'
import './searchbar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
      <span>BEEEEEEER</span>
      <GeoLocator />
      </div>
    );
  }
}

export default SearchBar;
