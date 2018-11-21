import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Header />);
});

it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should contian 1 h2, 1 p tag', () => {
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
});

