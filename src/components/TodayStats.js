import React from 'react';
import PropTypes from 'prop-types';

const TodayStats = ({
    workSessionCount
}) => (
    <div>
        {`${workSessionCount} work sessions completed`}
    </div>
);

TodayStats.propTypes = {
    workSessionCount: PropTypes.number.isRequired
};

export default TodayStats;