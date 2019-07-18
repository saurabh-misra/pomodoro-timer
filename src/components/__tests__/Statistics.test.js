import React from 'react';
import { shallow, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Statistics } from '../Statistics';

configure({ adapter: new Adapter() });

function setup(stats) {
    const props = {
        stats
    };
    const enzymeWrapper = shallow(<Statistics {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('Statistics component', () => {
    it('should return message if no stats exist', () => {
        const enzymeWrapper = render(<Statistics stats={[]} />);

        expect(
            enzymeWrapper.text()
        ).toEqual(expect.stringContaining("No statistics found"));
    });
});