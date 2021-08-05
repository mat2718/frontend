import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

const component = () => {
  return <Header />;
};

let wrapper: any;

describe('display the logo', () => {
  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });
});
