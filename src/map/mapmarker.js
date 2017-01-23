import React, { Component } from 'react';
import Tooltip from './tooltip'

import './mapmarker.css';

class MapMarker extends Component {
  static defaultProps = {
    places: []
  };

  constructor(props) {
     super(props);
     this.state = {open: false};
     this.openTooltip = this.openTooltip.bind(this);
   }

  openTooltip() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div className="mapmarker" onClick={this.openTooltip}>  
        <Tooltip $hover={this.props.$hover} place={this.props.place} open={this.state.open} />
        <i className="fa fa-beer fa-3x" aria-hidden="true"></i>
      </div>
    );
  }
}

export default MapMarker;
