import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ConnectedSettings, { Settings } from '../Settings';
import durationDefaults from '../../constants/DurationDefaults';
import settingsDefaults from '../../constants/SettingsDefaults';
import rootReducer, { 
    getWorkSessionDuration,
    getShortBreakSessionDuration,
    getLongBreakSessionDuration,
    getLongBreakThreshold
} from '../../reducers'

configure({adapter: new Adapter()});

describe('Settings', () => {
    const setupSettings = () => {
        const defaultState = {
            workSessionDuration         : durationDefaults.WORK,
            shortBreakSessionDuration   : durationDefaults.SHORT_BREAK,
            longBreakSessionDuration    : durationDefaults.LONG_BREAK,
            longBreakThreshold          : settingsDefaults.NUMBER_OF_WORK_SESSIONS_BEFORE_LONG_BREAK,
            onWorkSessionDurationChange : jest.fn(),
            onShortBreakDurationChange  : jest.fn(),
            onLongBreakDurationChange   : jest.fn(),
            onLongBreakThresholdChange  : jest.fn(),
        };
    
        const enzymeWrapper = shallow(<Settings { ...defaultState }/>);
    
        return {
            props: defaultState,
            enzymeWrapper
        };
    };

    it('should render without crashing', () => {
        const { enzymeWrapper } = setupSettings();
        expect(enzymeWrapper).toHaveLength(1);
    });
});

describe('ConnectedSettings', () => {
    const setupConnectedSettings = () => {
        const store = createStore(rootReducer);
        const enzymeWrapper = mount(
            <Provider store={store}>
                <ConnectedSettings />
            </Provider>
        );
    
        return {
            props: {},
            store,
            enzymeWrapper
        };
    };

    it('should render without crashing', () => {
        const { enzymeWrapper } = setupConnectedSettings();
        expect(enzymeWrapper).toHaveLength(1);
    });

    it('should update settings in state if work session duration is changed', () => {
        const { store, enzymeWrapper } = setupConnectedSettings();

        // get the select element for the work session duration
        const selectElement = enzymeWrapper.find('select[name="select-work-session-duration"]');

        // trigger on change
        const event = {
            target: {
                value: 40
            }
        };
        selectElement.simulate('change', event);

        // perform assertion to test whether state is updated with selected value
        const workSessionDuration = getWorkSessionDuration(store.getState());
        expect(workSessionDuration).toEqual(40);
    });

    it('should update settings in state if short break session duration is changed', () => {
        const { store, enzymeWrapper } = setupConnectedSettings();

        // get the select element for the short break session duration
        const selectElement = enzymeWrapper.find('select[name="select-shortbreak-session-duration"]');

        // trigger on change
        const event = {
            target: {
                value: 10
            }
        };
        selectElement.simulate('change', event);

        // perform assertion to test whether state is updated with selected value
        const shortBreakSessionDuration = getShortBreakSessionDuration(store.getState());
        expect(shortBreakSessionDuration).toEqual(10);
    });

    it('should update settings in state if long break session duration is changed', () => {
        const { store, enzymeWrapper } = setupConnectedSettings();

        // get the select element for the long break session duration
        const selectElement = enzymeWrapper.find('select[name="select-longbreak-session-duration"]');

        // trigger on change
        const event = {
            target: {
                value: 20
            }
        };
        selectElement.simulate('change', event);

        // perform assertion to test whether state is updated with selected value
        const longBreakSessionDuration = getLongBreakSessionDuration(store.getState());
        expect(longBreakSessionDuration).toEqual(20);
    });

    it('should update settings in state if long break threshold is changed', () => {
        const { store, enzymeWrapper } = setupConnectedSettings();

        // get the select element for the long break threshold
        const selectElement = enzymeWrapper.find('select[name="select-longbreak-threshold"]');

        // trigger on change
        const event = {
            target: {
                value: 6
            }
        };
        selectElement.simulate('change', event);

        // perform assertion to test whether state is updated with selected value
        const longBreakThreshold = getLongBreakThreshold(store.getState());
        expect(longBreakThreshold).toEqual(6);
    });
});