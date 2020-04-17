import React from 'react';
import GlobalStyle from '../GlobalStyle';
import {shallow} from 'enzyme';

describe('GlobalStyle', () => {
  it('matches ResetStyle snapshot', () => {
    const wrapper = shallow(<GlobalStyle/>);
    const globalStyleTags = document.head.getElementsByTagName('style');
    expect(globalStyleTags).toMatchSnapshot();
    wrapper.unmount();
  });
});