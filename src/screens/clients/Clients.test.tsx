import React from 'react';
import { mount } from 'enzyme';
import Clients, { data } from '.';
import { FlatList } from 'react-native';
import Header from '../../components/batches/header';

let wrapper: any;

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(<Clients />);
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
  });

  // tests if the flatlist holds the data we need
  it('should hold data', () => {
    const listData = wrapper.find(FlatList).props().data;
    expect(listData).toEqual(data);
  });
});

// yeet
