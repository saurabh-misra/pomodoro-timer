import ConnectedSession, { Session } from '../Session';
import SessionControls from '../SessionControls';
import Timer from '../Timer';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sessionModes from '../../constants/SessionModes';
import durationDefaults from '../../constants/DurationDefaults';
import { createStore } from '../../../../../../.cache/typescript/2.9/node_modules/redux';
import rootReducer, * as selectors from '../../reducers';
import {Provider} from 'react-redux';
import { setTimer } from '../../actions/TimerActions';
import settingsDefaults from '../../constants/SettingsDefaults';

configure({ adapter: new Adapter() });

function setup(mode, isStarted, isPaused, minutes, seconds){
    const props = {
        mode,
        isStarted,
        isPaused,
        minutes,
        seconds,
        workSessionDuration: durationDefaults.WORK,
        shortBreakSessionDuration: durationDefaults.SHORT_BREAK,
        longBreakSessionDuration: durationDefaults.LONG_BREAK,
        longBreakThreshold: settingsDefaults.NUMBER_OF_WORK_SESSIONS_BEFORE_LONG_BREAK,
        workSessionCounter: 0,
        initializeWorkSession: jest.fn(),
        initializeShortBreakSession: jest.fn(),
        initializeLongBreakSession: jest.fn(),
        pauseSession: jest.fn(),
        startSession: jest.fn(),
        stopSession: jest.fn(),
        completeSession: jest.fn(),
        onPullBack: jest.fn(),
        onLengthenShortBreak: jest.fn(),
        onShortenLongBreak: jest.fn(),
    };

    const enzymeWrapper = shallow(<Session {...props}/>);

    return {
        props,
        enzymeWrapper
    };
};

function setupConnectedSession(){
    // create the mock store
    const store = createStore(rootReducer);
    const wrappedComponent = (
        <Provider store={store}>
            <ConnectedSession />
        </Provider>
    );

    const enzymeWrapper = mount(wrappedComponent);
    
    return {
        store,
        enzymeWrapper
    };
};

describe('<Session />', () => {
    it('should render nothing initially', () => {
        const { enzymeWrapper } = setup();
        
        expect(
            enzymeWrapper.isEmptyRender()
        ).toBeTruthy();
    });

    it('should call initialize work mode dispatch prop function on mount', () => {
        const { props, enzymeWrapper } = setup();

        expect(
            props.initializeWorkSession.mock.calls.length
        ).toBe(1);
    });
    
    it('should render <Timer /> and <SessionControls /> components when "mode" is defined', () => {
        const { props, enzymeWrapper } = setup(sessionModes.WORK, false, false, durationDefaults.WORK, 0);

        expect(
            enzymeWrapper.find(Timer)
        ).toHaveLength(1);

        expect(
            enzymeWrapper.find(SessionControls)
        ).toHaveLength(1);
    });

    /***** INTEGRATION TESTS ******/
    it('should increment timer on pull back', () => {
        const {store, enzymeWrapper} = setupConnectedSession();
        
        // get the container component instance and props
        const sessionWrapper = enzymeWrapper.find(Session);
        const sessionProps = sessionWrapper.props();

        // start the session
        sessionProps.startSession();

        // pause the timer
        sessionProps.pauseSession();

        // set the timer
        store.dispatch(setTimer(10,32));

        // find the pull back button
        enzymeWrapper.update();
        const pullBackButton = enzymeWrapper
            .find('button.btn-pull-back');

        // trigger button click
        pullBackButton.simulate('click');

        // make the assertion
        const timer = selectors.getTimer(store.getState());
        expect(
            timer.minutes            
        ).toBe(15);

        // Unmount
        enzymeWrapper.unmount();
    });

    it('should complete current work session and initialize next SHORT BREAK session', () => {
        const {store, enzymeWrapper} = setupConnectedSession();

        // get the container component instance and props
        const sessionWrapper = enzymeWrapper.find(Session);
        const sessionInstance = sessionWrapper.instance();
        sessionInstance.handleCompleteSession();

        // make the assertion
        expect(
            selectors.getCurrentSessionMode(store.getState())
        ).toEqual(
            sessionModes.SHORT_BREAK
        );

        // Unmount
        enzymeWrapper.unmount();
    });

    it('should complete current SHORT BREAK session and initialize next WORK session', () => {
        const {store, enzymeWrapper} = setupConnectedSession();

        // get container component instance and props
        const sessionWrapper = enzymeWrapper.find(Session);
        const sessionProps = sessionWrapper.props();
        const sessionInstance = sessionWrapper.instance();

        sessionProps.initializeShortBreakSession(sessionProps.shortBreakSessionDuration);
        sessionInstance.handleCompleteSession();

        // make the assertion
        expect(
            selectors.getCurrentSessionMode(store.getState())            
        ).toEqual(
            sessionModes.WORK
        );

        // Unmount
        enzymeWrapper.unmount();
    });

    it('should start LONG BREAK session after work session count threshold', () => {
        const {store, enzymeWrapper} = setupConnectedSession();

        // get container component instance and props
        const sessionWrapper = enzymeWrapper.find(Session);
        const sessionProps = sessionWrapper.props();
        const sessionInstance = sessionWrapper.instance();
        
        // call dispatch callback props to crete 4 completed WORK sessions
        sessionInstance.handleCompleteSession();
        sessionProps.initializeWorkSession(sessionProps.workSessionDuration);
        sessionInstance.handleCompleteSession();
        sessionProps.initializeWorkSession(sessionProps.workSessionDuration);
        sessionInstance.handleCompleteSession();
        sessionProps.initializeWorkSession(sessionProps.workSessionDuration);
        sessionInstance.handleCompleteSession();

        // make the assertion
        expect(
            selectors.getCurrentSessionMode(store.getState())            
        ).toEqual(
            sessionModes.LONG_BREAK
        );

        // Unmount
        enzymeWrapper.unmount();
    });
});