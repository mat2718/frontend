import React from 'react';
import { mount } from 'enzyme';
import Batches from './Batches';

let wrapper: any;

describe('should return the list item', () => {
  beforeEach(() => {
    wrapper = mount(<Batches />);
  });

  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });
});
