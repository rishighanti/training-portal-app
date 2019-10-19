import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 720,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
      position: 'relative',
    };

    //Footer
    const footerStyle = {
      position: 'absolute',
      right: '1em',
      top: 0,  
    }


    //The Close Button
    const closeBtnStyle = {
      border: 'none',
      backgroundColor: '#fff',
      color: 'gray',
      fontSize: '2em',
      top: '0',
    }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal-popup" style={modalStyle}>
          {this.props.children}

          <div className="footer" style={footerStyle}>
            <button onClick={this.props.onClose} className="close-btn" style={closeBtnStyle}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;