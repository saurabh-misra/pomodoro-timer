import LongBreakSessionControls from '../LongBreakSessionControls';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const setup = (
    isStarted,
    isPaused
) => {
    const props = {
        isStarted,
        isPaused,
        onStart     : jest.fn(),
        onPause     : jest.fn(),
        onShorten   : jest.fn(),
        onStop      : jest.fn()
    };
    const enzymeWrapper = shallow(<LongBreakSessionControls {...props}/>);

    return {
        props,
        enzymeWrapper
    };
};

describe('<LongBreakSessionControls />', () => {
    it('should render SHORTEN, START AND SKIP button initially', () => {
        const { enzymeWrapper } = setup(false, false);

        expect(
            enzymeWrapper.find('BootstrapOutlineButton.btn-shorten')
        ).toHaveLength(1);
        expect(
            enzymeWrapper.find('BootstrapOutlineButton.btn-start')
        ).toHaveLength(1);
        expect(
            enzymeWrapper.find('BootstrapOutlineButton.btn-stop')
        ).toHaveLength(1);
    });

    it('should render SHORTEN, Pause and Stop buttons when started', () => {
        const { enzymeWrapper } = setup(true, false);

        expect(
            enzymeWrapper.find('BootstrapOutlineButton.btn-shorten')
        ).toHaveLength(1);
        expect(
            enzymeWrapper.find('BootstrapOutlineButton.btn-pause')
        ).toHaveLength(1);
        expect(
            enzymeWrapper.find('BootstrapOutlineButton.btn-stop')
        ).toHaveLength(1);
    });

    it('should render SHORTEN, resume and Stop buttons when paused', () => {
        const { enzymeWrapper } = setup(false, true);

        expect(
            enzymeWrapper.find('BootstrapOutlineButton.btn-shorten')
        ).toHaveLength(1);
        expect(
            enzymeWrapper.find('BootstrapOutlineButton.btn-start')
        ).toHaveLength(1);
        expect(
            enzymeWrapper.find('BootstrapOutlineButton.btn-stop')
        ).toHaveLength(1);
    });

    it('should call event handlers on button click', () => {
        const setupDefault = setup(false, false);
        setupDefault.enzymeWrapper.find('BootstrapOutlineButton.btn-shorten').simulate('click');
        setupDefault.enzymeWrapper.find('BootstrapOutlineButton.btn-start').simulate('click');
        setupDefault.enzymeWrapper.find('BootstrapOutlineButton.btn-stop').simulate('click');
        expect(
            setupDefault.props.onShorten.mock.calls
        ).toHaveLength(1);
        expect(
            setupDefault.props.onStart.mock.calls
        ).toHaveLength(1);
        expect(
            setupDefault.props.onStop.mock.calls
        ).toHaveLength(1);

        const setupStart = setup(true, false);
        setupStart.enzymeWrapper.find('BootstrapOutlineButton.btn-shorten').simulate('click');
        setupStart.enzymeWrapper.find('BootstrapOutlineButton.btn-pause').simulate('click');
        setupStart.enzymeWrapper.find('BootstrapOutlineButton.btn-stop').simulate('click');
        expect(
            setupStart.props.onShorten.mock.calls
        ).toHaveLength(1);
        expect(
            setupStart.props.onPause.mock.calls
        ).toHaveLength(1);
        expect(
            setupStart.props.onStop.mock.calls
        ).toHaveLength(1);

        const setupPause = setup(false, true);
        setupPause.enzymeWrapper.find('BootstrapOutlineButton.btn-shorten').simulate('click');
        setupPause.enzymeWrapper.find('BootstrapOutlineButton.btn-start').simulate('click');
        setupPause.enzymeWrapper.find('BootstrapOutlineButton.btn-stop').simulate('click');
        expect(
            setupPause.props.onShorten.mock.calls
        ).toHaveLength(1);
        expect(
            setupPause.props.onStart.mock.calls
        ).toHaveLength(1);
        expect(
            setupPause.props.onStop.mock.calls
        ).toHaveLength(1);
    });
});