import React from 'react';
import { mount } from 'enzyme';
import { FlatList, TouchableOpacity } from 'react-native';
import Header from '../../components/batches/Header';
import AddClient from '.';

let wrapper: any;

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(<AddClient />);
  });

  //tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  // tests if the header is defined
  it('should display the header', () => {
    const shouldBeHeader = wrapper.find(Header);
    expect(shouldBeHeader).toBeDefined();
    //expect(shouldBeHeader.length).toBeGreaterThan(0); would also work
  });

  // tests the add button
  it('should be pressed', () => {
    const shouldBePressed = wrapper.find(TouchableOpacity).at(0);

    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });
});

// yeet
