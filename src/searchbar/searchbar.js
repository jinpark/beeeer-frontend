import React, { Component } from 'react';

import GeoLocator from '../geolocator/geolocator'
import './searchbar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
      <GeoLocator />
      <form>
        <input type="text" name="firstname" placeholder="something" /><br />
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default SearchBar;
