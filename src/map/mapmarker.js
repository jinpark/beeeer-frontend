import React, { Component } from 'react';
import ReactModal from 'react-modal';

import './mapmarker.css';

class MapMarker extends Component {
  static defaultProps = {
    places: []
  };

  constructor () {
    super();
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="mapmarker">  
        <i className="fa fa-beer fa-3x" aria-hidden="true" onClick={this.handleOpenModal} ></i>
        <ReactModal isOpen={this.state.showModal} contentLabel="Example Modal" >
          <h1>{this.props.place.name}</h1>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default MapMarker;
