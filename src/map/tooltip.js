import React, { Component } from 'react';
import ReactModal from 'react-modal';

import './tooltip.css';

const customModalStyle = {content: {top: "100px"}};

class Tooltip extends Component {

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
    const hover = {
      opacity: this.props.open ? 1 : 0
    };

    return (
      <div className="tooltip-modal" style={hover} >
        <div className="tooltip">  
          <h1>{this.props.place.name}</h1>
          <hr />
          <div>{this.props.place.description}</div>
          <button onClick={this.handleOpenModal}>Click</button>
        </div>
        <ReactModal isOpen={this.state.showModal} contentLabel="Example Modal" style={customModalStyle} >
          <h1>{this.props.place.name}</h1>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default Tooltip;
