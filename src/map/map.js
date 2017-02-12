import React, {Component} from 'react';
import { connect } from 'react-redux'

import GoogleMap from 'google-map-react';
import MapMarker from './mapmarker'
import { fetchPlaces } from '../actions/location'
import mapstyles from './mapstyles'
import './map.css';

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 37.4978602, lng: 127.0253183},
    zoom: 14,
    currentLocation: {lat: 37.4978602, lng: 127.0253183}
  };

  _onChildMouseEnter = (key /*, childProps */) => {
    this.props.onHoverKeyChange(key);
  }

  _onChildMouseLeave = (/* key, childProps */) => {
    this.props.onHoverKeyChange(null);
  }

  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch(fetchPlaces())
  }

  constructor(props) {
    super(props);
    this.createMapOptions = this.createMapOptions.bind(this);
  }

  createMapOptions(maps) {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
      mapTypeControl: true,
      zoomControlOptions: {
        position: maps.ControlPosition.LEFT_BOTTOM,
        style: maps.ZoomControlStyle.SMALL
      },
      styles: mapstyles
    };
  }

  render() {
    return (
       <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyBwmXcrHsefEVaN6tvmBWen5_YmGLPoqIA'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        center={this.props.currentLocation}
        options={this.createMapOptions} 
      >
        {this.props.places.places.map((place, i) =>
          <MapMarker key={i.toString() + place.name} place={place} lat={place.lat} lng={place.lon} $hover={this.props.$hover}/>
        )}
      </GoogleMap>
    );
  }
}

const mapStateToProps = state => ({ 
  currentLocation: state.latlng,
  places: state.places
});

const SimpleMapPage = connect(
  mapStateToProps
)(SimpleMap)

export default SimpleMapPage
