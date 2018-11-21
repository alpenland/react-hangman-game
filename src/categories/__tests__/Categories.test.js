import React from 'react';
import { shallow } from 'enzyme';

import Categories from '../Categories';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Categories />)
});

it('should render Categories component', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should render 5 category buttons', () => {
    expect(wrapper.find('button').length).toBe(5);
});