import React from 'react';
import PropTypes from 'prop-types';
import sessionModes from '../constants/SessionModes';
import Timer from './Timer';
import SessionControls from './SessionControls';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/SessionActions';
import * as timerActions from '../actions/TimerActions';
import durationDefaults from '../constants/DurationDefaults';
import timerDefaults from '../constants/TimerDefaults';
import * as selectors from '../reducers';
import { showNotification } from '../utils/notifications';

export class Session extends React.Component{
    constructor(props){
        super(props);

        this.handleTimerStart = this.handleTimerStart.bind(this);
        this.handleTimerPause = this.handleTimerPause.bind(this);
        this.handleTimerStop = this.handleTimerStop.bind(this);
        this.handlePullBack = this.handlePullBack.bind(this);
        this.onTimerTick = this.onTimerTick.bind(this);

        this.intervalId = '';
    }

    componentDidMount(){
        this.props.initializeWorkSession(this.props.workSessionDuration);
    }

    handleTimerStart(){
        this.props.startSession();
        this.props.decrementTimer();
        this.intervalId = setInterval(this.onTimerTick, 1000);
    }

    onTimerTick(){
        if(this.props.minutes === 0 && this.props.seconds === 0)
            return this.handleCompleteSession();

        this.props.decrementTimer();
    }

    handleCompleteSession(){
        clearInterval(this.intervalId);
        this.props.completeSession(this.props.mode);
        // TODO: control notifications through settings
        this.notifyUser(this.props.mode);
        this.initializeNextSession();
    }

    notifyUser(mode){
        const title='Pomodoro Timer App';
        let body = '';
        if(mode === sessionModes.WORK)
            body = 'Your work session is complete. Time to take a break.';
        else
            body = 'Your break is complete. Time to work.';

        showNotification(Notification, title, body);
    }

    initializeNextSession(){
        // Get the completed session
        const currSession = this.props.mode;
    
        switch(currSession){
            // If the completed session is a break session, return WORK sesion
            case sessionModes.LONG_BREAK:
            case sessionModes.SHORT_BREAK:
                this.props.initializeWorkSession(this.props.workSessionDuration);
                return;
            // If completed session is a work session and
            // the 4 consecutive work sessions have been completed then
            // return the next session as a LONG BREAK
            // else return a SHORT BREAK
            case sessionModes.WORK:
                this.props.workSessionCounter % this.props.longBreakThreshold === 0
                    ? this.props.initializeLongBreakSession(this.props.longBreakSessionDuration)
                    : this.props.initializeShortBreakSession(this.props.shortBreakSessionDuration);
                return
            default:
                return this.props.mode;
        }
    }

    handleTimerPause(){
        clearInterval(this.intervalId);
        this.props.pauseSession();
    }

    handleTimerStop(){
        clearInterval(this.intervalId);
        this.props.stopSession();
        this.props.initializeWorkSession(this.props.workSessionDuration);
    }

    handlePullBack(){
        this.props.onPullBack(timerDefaults.INCREMENT_STEP, this.props.workSessionDuration);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render(){
        if(this.props.mode){
            return (
                <div>
                    <Timer 
                        minutes={this.props.minutes}
                        seconds={this.props.seconds}
                    />
                    <SessionControls
                        mode={this.props.mode}
                        isStarted={this.props.isStarted}
                        isPaused={this.props.isPaused}
                        onPause={this.handleTimerPause}
                        onStart={this.handleTimerStart}
                        onStop={this.handleTimerStop}
                        onPullBack={this.handlePullBack}
                        onLengthenShortBreak={this.props.onLengthenShortBreak}
                        onShortenLongBreak={this.props.onShortenLongBreak}
                    />
                </div>
            );
        }

        return null;
    }
};

Session.propTypes = {
    mode: PropTypes.oneOf([
        sessionModes.WORK, 
        sessionModes.SHORT_BREAK, 
        sessionModes.LONG_BREAK
    ]),
    isStarted: PropTypes.bool,
    isPaused: PropTypes.bool,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    workSessionCounter: PropTypes.number.isRequired,
    workSessionDuration: PropTypes.number.isRequired,
    shortBreakSessionDuration: PropTypes.number.isRequired,
    longBreakSessionDuration: PropTypes.number.isRequired,
    longBreakThreshold: PropTypes.number.isRequired,
    initializeWorkSession: PropTypes.func.isRequired,
    initializeShortBreakSession: PropTypes.func.isRequired,
    initializeLongBreakSession: PropTypes.func.isRequired,
    pauseSession: PropTypes.func.isRequired,
    startSession: PropTypes.func.isRequired,
    stopSession: PropTypes.func.isRequired,
    completeSession: PropTypes.func.isRequired,
    onPullBack: PropTypes.func.isRequired,
    onLengthenShortBreak: PropTypes.func.isRequired,
    onShortenLongBreak: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        mode: selectors.getCurrentSessionMode(state),
        isStarted: selectors.getSessionStatus(state).isStarted,
        isPaused: selectors.getSessionStatus(state).isPaused,
        minutes: selectors.getTimer(state).minutes,
        seconds: selectors.getTimer(state).seconds,
        workSessionCounter: selectors.getWorkSessionsCount(state, (new Date())),
        workSessionDuration: selectors.getWorkSessionDuration(state),
        shortBreakSessionDuration: selectors.getShortBreakSessionDuration(state),
        longBreakSessionDuration: selectors.getLongBreakSessionDuration(state),
        longBreakThreshold: state.settings.longBreakThreshold,
    };
};

const ConnectedSession = connect(
    mapStateToProps,
    {
        initializeWorkSession: sessionActions.initializeWorkSession,
        initializeShortBreakSession: sessionActions.initializeShortBreakSession,
        initializeLongBreakSession: sessionActions.initializeLongBreakSession,
        pauseSession: sessionActions.pauseSession,
        startSession: sessionActions.startSession,
        stopSession: sessionActions.stopSession,
        completeSession: sessionActions.completeSession,
        onPullBack: timerActions.incrementTimer,
        decrementTimer: timerActions.decrementTimer,
        onLengthenShortBreak: sessionActions.initializeLongBreakSession,
        onShortenLongBreak: sessionActions.initializeShortBreakSession,
    }
)(Session);

export default ConnectedSession;