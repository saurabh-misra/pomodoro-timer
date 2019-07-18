import WorkSessionControls from '../WorkSessionControls';
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
        onStop      : jest.fn(),
        onPullBack  : jest.fn(),
    };
    const enzymeWrapper = shallow(<WorkSessionControls {...props}/>);

    return {
        props,
        enzymeWrapper
    };
};

describe('<WorkSessionControls />', () => {
    it('should render atleast one START button initially', () => {
        const { enzymeWrapper } = setup(false, false);

        expect(
            enzymeWrapper.find('BootstrapOutlineButton')
        ).toHaveLength(1);
    });

    it('should render Pull back, Pause and Stop buttons when started', () => {
        const { enzymeWrapper } = setup(true, false);

        expect(
            enzymeWrapper.find('BootstrapOutlineButton')
        ).toHaveLength(3);
    });

    it('should render Pull back, Resume and Stop buttons when paused', () => {
        const { enzymeWrapper } = setup(false, true);

        expect(
            enzymeWrapper.find('BootstrapOutlineButton')
        ).toHaveLength(3);
    });

    it('should call event handlers on button click', () => {
        const setupDefault = setup(false, false);
        setupDefault.enzymeWrapper.find('BootstrapOutlineButton.btn-start').simulate('click');
        expect(
            setupDefault.props.onStart.mock.calls
        ).toHaveLength(1);

        let setupStart = setup(true, false);
        setupStart.enzymeWrapper.find('BootstrapOutlineButton.btn-pull-back').simulate('click');
        expect(
            setupStart.props.onPullBack.mock.calls
        ).toHaveLength(1);
        setupStart.enzymeWrapper.find('BootstrapOutlineButton.btn-pause').simulate('click');
        expect(
            setupStart.props.onPause.mock.calls
        ).toHaveLength(1);
        setupStart.enzymeWrapper.find('BootstrapOutlineButton.btn-stop').simulate('click');
        expect(
            setupStart.props.onStop.mock.calls
        ).toHaveLength(1);

        let setupPause = setup(false, true);
        setupPause.enzymeWrapper.find('BootstrapOutlineButton.btn-pull-back').simulate('click');
        expect(
            setupPause.props.onPullBack.mock.calls
        ).toHaveLength(1);
        setupPause.enzymeWrapper.find('BootstrapOutlineButton.btn-start').simulate('click');
        expect(
            setupPause.props.onStart.mock.calls
        ).toHaveLength(1);
        setupPause.enzymeWrapper.find('BootstrapOutlineButton.btn-stop').simulate('click');
        expect(
            setupPause.props.onStop.mock.calls
        ).toHaveLength(1);
    });
});