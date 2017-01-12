import React, {Component} from 'react';
import { connect } from 'react-redux'

import GoogleMap from 'google-map-react';
import MapMarker from './mapmarker'
import './map.css';

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 37.4978602, lng: 127.0253183},
    zoom: 16,
    currentLocation: {lat: 37.4978602, lng: 127.0253183},
    marker: {lat: 37.503031, lng: 127.027753}
  };

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
       <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        center={this.props.currentLocation}>
        <MapMarker lat={this.props.marker.lat} lng={this.props.marker.lng}/>
      </GoogleMap>
    );
  }
}

const mapStateToProps = state => ({ 
  currentLocation: state.latlng
});

const SimpleMapPage = connect(
  mapStateToProps
)(SimpleMap)

export default SimpleMapPage
