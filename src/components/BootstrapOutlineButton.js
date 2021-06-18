import React from 'react';
import './BootstrapOutlineButton.css';

const BootstrapOutlineButton = (props) => (
    <button 
        type="button" 
        name={props.name}
        onClick={props.onClick}
        className={`btn btn-outline-light ${props.className !== undefined ? props.className : ''}`}>
        { props.children }
    </button>
);

export default BootstrapOutlineButton;