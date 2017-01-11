import React, {Component} from 'react';
import { connect } from 'react-redux'

import GoogleMap from 'google-map-react';

import './map.css';

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 37.4978602, lng: 127.0253183},
    zoom: 16,
    currentLocation: {lat: 37.4978602, lng: 127.0253183},
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
