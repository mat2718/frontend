import React from 'react';
import { mount } from 'enzyme';
import { FlatList, TouchableOpacity } from 'react-native';
import BatchStats from './';
import { BarChart } from 'react-native-chart-kit';

let wrapper: any;

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(<BatchStats data={[47, 7, 10, 20]} />);
  });

  // tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  // tests if the barchart is defined
  it('should find the barchart', () => {
    const shouldBeBarChart = wrapper.find(BarChart);
    expect(shouldBeBarChart).toBeDefined();
  });

  // tests if the barchart holds the data
  it('should hold data', () => {
    const chartData = wrapper.find(BarChart).props().data;
    expect(chartData.datasets.length).toBeGreaterThan(0);
  });
});
