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

it('should render 1 p tag, ChosenWord, and RemainingLives', () => {
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('ChosenWord').length).toBe(1);
    expect(wrapper.find('RemainingLives').length).toBe(1);
});