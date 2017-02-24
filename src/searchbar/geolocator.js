import React, { Component } from 'react';
import { connect } from 'react-redux'

import './geolocator.css';

class GeoLocator extends Component {
  geolocate(){
    var that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      that.props.updateLocation(position.coords.latitude, position.coords.longitude);
      // store.dispatch({ type: 'SET_LATLNG', lat: position.coords.latitude, lng: position.coords.longitude })
    });
  }

  // updateLocation(latitude, longitude) {
  //   Store.dispatch({ type: 'SET_LATLNG', lat: latitude, lng: longitude })
  // }


  render() {
    return (
      <div className="geolocator">
        <i className="fa fa-crosshairs fa-3x" onClick={this.geolocate.bind(this)} aria-hidden="true"></i>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLocation: (latitude, longitude) => {
      dispatch({type: 'SET_LATLNG', lat: latitude, lng: longitude})
    }
  }
}

const GeoLocatorPage = connect(
  null,
  mapDispatchToProps
)(GeoLocator)

export default GeoLocatorPage;
