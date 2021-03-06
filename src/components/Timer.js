import React from 'react';
import PropTypes from 'prop-types';
import './Timer.css'

const Timer = ({minutes, seconds, className}) => (
    <div className={`Timer ${className}`}>
        <span className="Timer-minutes">{minutes}</span>
        <span className="Timer-colon">:</span>
        <span className="Timer-seconds">{seconds.toString().padStart(2, '0')}</span>
    </div>
);

Timer.propTypes = {
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    className: PropTypes.string
}

export default Timer;
