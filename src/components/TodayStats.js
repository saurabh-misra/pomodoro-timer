import React from 'react';
import PropTypes from 'prop-types';

const TodayStats = ({
    workSessionCount,
    shortBreakSessionCount,
    longBreakSessionCount,
}) => (
    <div>
        <div className="row">
            <div className="col">        
                <h4>Today</h4>
                <hr className="border-white-50"/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h1>{workSessionCount}</h1>
                {`work session${ workSessionCount === 1 ? '' : 's'}`}
            </div>
            <div className="col">
                <h1>{shortBreakSessionCount}</h1>
                {`short break${ shortBreakSessionCount === 1 ? '' : 's' }`}
            </div>
            <div className="col">
                <h1>{longBreakSessionCount}</h1>
                {`long break${ longBreakSessionCount === 1 ? '' : 's' }`}
            </div>
        </div>
    </div>
);

TodayStats.propTypes = {
    workSessionCount: PropTypes.number.isRequired
};

const TodayStatsResponsive = props => (
    <div>
        {/* Desktop Layout */}
        <div className="d-none d-xl-block container-fluid fixed-bottom mb-3 text-white-50 w-50">
            <TodayStats {...props} />
        </div>
        {/* Mobile and Tablet Layout */}
        <div className="d-block d-xl-none container-fluid fixed-bottom mb-3 text-white-50">
            <TodayStats {...props} />
        </div>
    </div>
)

export default TodayStatsResponsive;