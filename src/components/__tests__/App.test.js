import React from 'react';
import App from '../App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  window.Notification = {};
  const enzymeWrapper = shallow(<App />);

  expect(
    enzymeWrapper.isEmptyRender()
  ).toBeFalsy();
});
