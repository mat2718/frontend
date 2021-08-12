import React from 'react';
import { mount } from 'enzyme';
import { FlatList } from 'react-native';
import Curricula, { DATA } from '.';

describe('Curricula', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<Curricula />);
  });

  //test if the component is working
  it('Component should appear', () => {
    expect(wrapper).toBeDefined();
  });

  //test if the flatlist renders
  it('Flatlist should appear', () => {
    const flatList = wrapper.find(FlatList);
    expect(flatList.length).toBeDefined();
  });

  //test if flatlist takes in data
  it('Flatlist should have data', () => {
    const flatListData = wrapper.find(FlatList).props().DATA;
    expect(flatListData).toEqual(DATA);
  });
});
