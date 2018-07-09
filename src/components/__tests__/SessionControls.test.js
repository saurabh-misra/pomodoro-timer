import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SessionControls from '../SessionControls';
import sessionModes from '../../constants/SessionModes';

configure({ adapter: new Adapter() });

function setup(mode, isStarted=false, isPaused=false){
    const props = {
        mode,
        isStarted,
        isPaused,
        onPause: jest.fn(),
        onStart: jest.fn(),
        onStop: jest.fn(),
        onPullBack: jest.fn(),
        onLengthenShortBreak: jest.fn(),
        onShortenLongBreak: jest.fn(),
        onBreakSkip: jest.fn()
    };

    const enzymeWrapper = shallow(<SessionControls {...props}/>);

    return {
        props,
        enzymeWrapper
    };
};

describe('<SessionControls />', () => {
    it('should render WorkSessionControls for WORK mode', () => {
        const { enzymeWrapper } = setup(sessionModes.WORK);
        
        expect(
            enzymeWrapper.find('WorkSessionControls')
        ).toHaveLength(1);
    });

    it('should render ShortBreakSessionControls for SHORT_BREAK mode', () => {
        const { enzymeWrapper } = setup(sessionModes.SHORT_BREAK);
        
        expect(
            enzymeWrapper.find('ShortBreakSessionControls')
        ).toHaveLength(1);
    });

    it('should render LongBreakSessionControls for LONG_BREAK mode', () => {
        const { enzymeWrapper } = setup(sessionModes.LONG_BREAK);
        
        expect(
            enzymeWrapper.find('LongBreakSessionControls')
        ).toHaveLength(1);
    });
});