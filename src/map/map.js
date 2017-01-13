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
    zoom: 16,
    currentLocation: {lat: 37.4978602, lng: 127.0253183}
    // mapOptions = (maps) => {
    //   return { styles: mapstyles, 
    //   zoomControlOptions: {
    //     position: maps.ControlPosition.RIGHT_TOP,
    //     style: maps.ZoomControlStyle.SMALL
    //   }
    // }}
  };

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
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_TOP,
        style: maps.ZoomControlStyle.SMALL
      },
      styles: mapstyles
    };
  }

  render() {
    console.log(this.props);
    return (
       <GoogleMap
        bootstrapURLKeys={{keys: 'AIzaSyAhna2TZMIT4O6ZUBhau3t-K5dsQdVjN54'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        center={this.props.currentLocation}
        options={this.createMapOptions} >
        {this.props.places.places.map((place, i) =>
          <MapMarker key={i.toString() + place.name} place={place} lat={place.lat} lng={place.lng} />
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
