import React, { Component } from 'react';
import ReactModal from 'react-modal';
import onClickOutside from 'react-onclickoutside';


import './tooltip.css';

const customModalStyle = {};

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
      opacity: this.props.open ? 1 : 0,
      height: this.props.open ? 'auto' : 0,
      padding: this.props.open ? 'inherit' : 0
    };


    return (
      <div className="tooltip-modal" style={hover}>
        <article className="message is-warning" style={hover}>
          <div className="message-header">
            {this.props.place.name}
            <i className="fa fa-chevron-right fa-2x" aria-hidden="true" onClick={this.handleOpenModal}></i>
          </div>
          <div className="message-body">
            {this.props.place.description}
          </div>
        </article>

        <ReactModal isOpen={this.state.showModal} contentLabel="{this.props.place.name}" style={customModalStyle}>
          <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">{this.props.place.name}</p>
                <button className="delete" onClick={this.handleCloseModal}></button>
              </header>
              <section className="modal-card-body">
                <img src={this.props.place.image} />

                {this.props.place.description}
              </section>
              <footer className="modal-card-foot">
                {this.props.place.address}
              </footer>
            </div>
          </div>
        </ReactModal>

      </div>
    );
  }
}

const Tooltip = onClickOutside(ATooltip);
export default Tooltip;
