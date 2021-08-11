import React from 'react';
import { mount } from 'enzyme';
import Header from '.';

const component = () => {
  return <Header />;
};

let wrapper: any;

/*
TO-DO 

'it should display an image'
    > perhaps 'it should display the Revature logo', and you check that props().source.uri contains what it should
*/

describe('display the logo', () => {
  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });
});
