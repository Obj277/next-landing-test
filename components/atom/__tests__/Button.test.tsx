import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Button from 'atom/Button';

describe('Button', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Button/>);
  });

  afterEach(() => wrapper.unmount());

  test('static styles', () => {
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('position', 'relative');
    expect(wrapper).toHaveStyleRule('align-items', 'center');
    expect(wrapper).toHaveStyleRule('justify-content', 'center');
    expect(wrapper).toHaveStyleRule('outline', 'none');
    expect(wrapper).toHaveStyleRule('border', 'none');
    expect(wrapper).toHaveStyleRule('background', 'transparent');
    expect(wrapper).toHaveStyleRule('padding', '0');
    expect(wrapper).toHaveStyleRule('overflow', 'hidden');
  });

  test('conditional styles', () => {
    wrapper.setProps({disabled: false});
    expect(wrapper).toHaveStyleRule('cursor', 'pointer');

    wrapper.setProps({disabled: true});
    expect(wrapper).toHaveStyleRule('cursor', 'not-allowed');
  });
});