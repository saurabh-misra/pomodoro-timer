import Timer from '../Timer';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Timer />', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Timer minutes={14} seconds={23}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render a timer', () => {
        const minutes = 15;
        const seconds = 34;
        const timerText = '15:34';
        const wrapper = shallow(<Timer minutes={minutes} seconds={seconds}/>);
        expect(wrapper.text()).toEqual(expect.stringContaining(timerText));
    });

    it('should render a timer with leading 0s for seconds', () => {
        const minutes = 9;
        const seconds = 5;
        const timerText = '9:05';
        const wrapper = shallow(<Timer minutes={minutes} seconds={seconds}/>);
        expect(wrapper.text()).toEqual(expect.stringContaining(timerText));
    });
});

