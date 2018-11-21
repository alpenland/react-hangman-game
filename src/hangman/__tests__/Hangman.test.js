import React from 'react';
import { shallow } from 'enzyme';
import Hangman from '../Hangman';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Hangman />);
});

it('should render Hangman without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should render Header, Categories, StatusBar, LetterDisplay, and Keyboard', () => {
    expect(wrapper.find('Header').length).toBe(1);
    expect(wrapper.find('Categories').length).toBe(1);
    expect(wrapper.find('StatusBar').length).toBe(1);
    expect(wrapper.find('LetterDisplay').length).toBe(1);
    expect(wrapper.find('Keyboard').length).toBe(1);
});