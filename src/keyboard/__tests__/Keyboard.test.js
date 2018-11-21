import React from 'react';
import { shallow } from 'enzyme';

import Keyboard from '../Keyboard';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Keyboard />)
});

it('should render Keyboard correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should contain 26 letter buttons', () => {
    expect(wrapper.find('button').length).toBe(26);
});