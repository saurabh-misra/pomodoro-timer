import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStats } from '../reducers';
import { getMonthName } from '../utils/dates';
import { deleteAllStatistics } from '../actions/StatisticsActions';
import BootstrapOutlineButton from './BootstrapOutlineButton';

export const Statistics = ({
    stats,
    deleteAllStatistics
}) => {
    function handleDeleteAll() {
        if(window.confirm('Are you sure you want to delete all statistics?')) {
            deleteAllStatistics();
        }
    }

    const areStatsPresent = stats === undefined || stats.length === 0; 

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-6">
                    {/* For tabs and desktop widths */}
                    <h1 className="d-none d-sm-block mb-3 text-left">
                        Report
                    </h1>
                    {/* For mobile widths */}
                    <h3 className="d-block d-sm-none mb-3 text-left">
                        Report
                    </h3>
                </div>
                <div className="col-6">
                    <BootstrapOutlineButton 
                        onClick={handleDeleteAll} 
                        className={`${ areStatsPresent ? 'invisible' : '' } float-right mt-sm-2`}>
                        Delete All
                    </BootstrapOutlineButton>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <hr className="bg-light mt-0" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {
                        areStatsPresent 
                        ? <span>No statistics found</span> 
                        : (
                            <table className="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th>Day</th>
                                        <th>Work Sessions</th>
                                        <th>Short Breaks</th>
                                        <th>Long Breaks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        stats.reverse().map( 
                                            stat => (
                                                <tr key={stat.date.getMilliseconds()}>
                                                    <td>{`${getMonthName(stat.date)} ${stat.date.getDate()}, ${stat.date.getFullYear()}`}</td>
                                                    <td>{stat.workSessions}</td>
                                                    <td>{stat.shortBreakSessions}</td>
                                                    <td>{stat.longBreakSessions}</td>
                                                </tr>
                                            )
                                        )
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
Statistics.propTypes = {
    stats: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    stats: getStats(state)
});
const mapDispatchToProps = {
    deleteAllStatistics
};
const ConnectedStatistics = connect(
    mapStateToProps,
    mapDispatchToProps
)(Statistics);

export default ConnectedStatistics;