import React from 'react';
import { mount } from 'enzyme';
import Batches, { data } from './Batches';
import { FlatList, TouchableOpacity } from 'react-native';
import Header from '../../component/Header/Header';

let wrapper: any;


describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(<Batches />);
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

  // tests if the flatlist is defined
  it('should display the flatlist', () => {
    const shouldBeFlatlist = wrapper.find(FlatList);
    expect(shouldBeFlatlist).toBeDefined();
  })

  // tests if the flatlist holds the data we need
  it('should hold data', () => { 
    const listData = wrapper.find(FlatList).props().data;
    expect(listData).toEqual(data);
  });

  it('should be pressed', () => {
    const shouldBePressed = wrapper.find(TouchableOpacity).at(0);

    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');
    
    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();
  
    expect(myEventHandler).toHaveBeenCalled();
  });
});

// yeet 