import React from 'react';
import { shallow } from 'enzyme';

import RemainingLives from '../RemainingLives';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<RemainingLives />)
});

it('should render RemainingLives', () => {
    expect(wrapper).toMatchSnapshot();
});

