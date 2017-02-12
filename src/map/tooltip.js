import React, { Component } from 'react';
import ReactModal from 'react-modal';
import onClickOutside from 'react-onclickoutside';


import './tooltip.css';

const customModalStyle = {content: {border: '0',
                                    borderRadius: '4px',
                                    bottom: 'auto',
                                    minHeight: '10rem',
                                    maxHeight: 'calc(80% - 100px)',
                                    left: '50%',
                                    padding: '2rem',
                                    position: 'fixed',
                                    right: 'auto',
                                    top: 'calc(50% + 50px)',
                                    transform: 'translate(-50%,-50%)',
                                    minWidth: '20rem',
                                    width: '80%',
                                    maxWidth: '60rem'
                                  }};

class ATooltip extends Component {

  constructor () {
    super();
    this.state = {
      showModal: false,
      showTooltip: false
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

  handleClickOutside() {
    this.setState({ showTooltip: false });
  }

  render() {
    const hover = {
      opacity: this.props.open ? 1 : 0
    };


    return (
      <div className="tooltip-modal" style={hover} >
        <div className="tooltip">  
          <div className="tooltip__title">
          <h1>{this.props.place.name}</h1> 
          <button onClick={this.handleOpenModal}>
            <i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
          </button>
          </div>
          <p>{this.props.place.description}</p>
        </div>
        <ReactModal isOpen={this.state.showModal} contentLabel="{this.props.place.name}" style={customModalStyle}>
          <div className="modal__title">
            <h1>{this.props.place.name}</h1>
            <button onClick={this.handleCloseModal}>
              <i className="fa fa-times fa-2x" aria-hidden="true"></i>
            </button>
          </div>
          <hr/>
          <img src={this.props.place.image} />
          <p>{this.props.place.description}</p>
        </ReactModal>
      </div>
    );
  }
}

const Tooltip = onClickOutside(ATooltip);
export default Tooltip;
