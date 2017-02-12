import React, { Component } from 'react';
import { connect } from 'react-redux'
import Tooltip from './tooltip'

import './mapmarker.css';

class MapMarker extends Component {
  static defaultProps = {
    places: []
  };

  constructor(props) {
     super(props);
     this.state = {open: false};
     this.openTooltipAndCenter = this.openTooltipAndCenter.bind(this);
   }

  openTooltipAndCenter() {
    this.setState({open: !this.state.open});
    this.props.updateLocation(this.props.place.lat, this.props.place.lon);
  }


  render() {
    return (
      <div className="mapmarker" onClick={this.openTooltipAndCenter}>  
        <Tooltip $hover={this.props.$hover} place={this.props.place} open={this.state.open} />
        <i className="fa fa-beer fa-3x" aria-hidden="true"></i>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLocation: (latitude, longitude) => {
      dispatch({type: 'SET_LATLNG', lat: latitude, lng: longitude})
    },
    openTooltip: (key) => {
      dispatch({type: 'OPEN_TOOLTIP', key: key})
    },
    closeTooltip: (key) => {
      dispatch({type: 'CLOSE_TOOLTIP'})
    }
  }
}

const MapMarkerPage = connect(
  null,
  mapDispatchToProps
)(MapMarker)

export default MapMarkerPage;
