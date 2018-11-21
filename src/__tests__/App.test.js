import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />)
});

it('should render App without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should render Hangman', () => {
    expect(wrapper.find('Hangman').length).toBe(1);
});