import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStats } from '../reducers';

export const Statistics = ({
    stats
}) => stats === undefined || stats.length === 0 
? <div>No statistics found</div> 
: (
    <table>
        <tr>
            <th>Day</th>
            <th>Work Sessions</th>
            <th>Short Break Sessions</th>
            <th>Long Break Sessions</th>
        </tr>
        {
            stats.map( 
                stat => (
                    <tr>
                        <td>{stat.date.toString()}</td>
                        <td>{stat.workSessions}</td>
                        <td>{stat.shortBreakSessions}</td>
                        <td>{stat.longBreakSessions}</td>
                    </tr>
                )
            )
        }
    </table>
);
Statistics.propTypes = {
    stats: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    stats: getStats(state)
});
const ConnectedStatistics = connect(
    mapStateToProps
)(Statistics);

export default ConnectedStatistics;