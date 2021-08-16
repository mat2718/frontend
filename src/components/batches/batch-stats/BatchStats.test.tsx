import React from 'react';
import { mount } from 'enzyme';
import BatchStats from '.';
import { BarChart } from 'react-native-chart-kit';

/**
 * Batch Stats Test - test file for the BatchStats component
 * @author Matthew Otto and Oriel Red Oral
 */

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

  // tests the color opacity function
  it('opacity function does not throw errors when called', () => {
    const chartConfig = wrapper.find(BarChart);
    chartConfig.prop('chartConfig').color();
  });
});
