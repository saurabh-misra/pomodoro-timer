import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import ConnectedSettings, { 
    Settings 
} from '../Settings';
import durationDefaults from '../../constants/DurationDefaults';
import settingsDefaults from '../../constants/SettingsDefaults';
import { 
    getWorkSessionDuration,
    getShortBreakSessionDuration,
    getLongBreakSessionDuration,
    getLongBreakThreshold,
    getSettings
} from '../../reducers';
import { configureStoreForTesting } from '../../configureStore';
import { defaultState } from '../../reducers/settings'; 

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
            onResetToDefault            : jest.fn(),
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
        const store = configureStoreForTesting();
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

    it('should update settings in state if user resets to default', () => {
        const { store, enzymeWrapper } = setupConnectedSettings();

        // Set the current state to something other than the default state
        const selectElement1 = enzymeWrapper.find('select[name="select-work-session-duration"]');
        const selectElement2 = enzymeWrapper.find('select[name="select-shortbreak-session-duration"]');
        const selectElement3 = enzymeWrapper.find('select[name="select-longbreak-session-duration"]');
        const selectElement4 = enzymeWrapper.find('select[name="select-longbreak-threshold"]');
        const event = {
            target: {
                value: 13
            }
        };
        selectElement1.simulate('change', event);
        selectElement2.simulate('change', event);
        selectElement3.simulate('change', event);
        selectElement4.simulate('change', event);

        // get the button element for RESET TO DEFAULT
        const btn = enzymeWrapper.find('button[name="btn-reset-to-default"]');

        // trigger click event
        btn.simulate('click', event);

        // perform assertion to test whether state is updated with default values
        const settings = getSettings(store.getState());
        expect(settings).toEqual(defaultState);
    });
});