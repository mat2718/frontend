import React from 'react';
import {mount} from 'enzyme';
import Diagram from '.';
import { LineChart } from 'react-native-chart-kit';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Reducer } from '../../redux/reducer';
import thunk from 'redux-thunk';

let wrapper: any;

const store = createStore(Reducer, applyMiddleware(thunk))

describe('Diagram', () => {
  beforeEach(() => {
    wrapper = mount(
    <Provider store={store}>
      <Diagram/>
    </Provider>); 
  });

  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  it('should display the LineChart', () => {
    expect(wrapper.find(LineChart).length).toBeGreaterThan(0)
  });

  it('should find the LineChart', () => {
    const shouldBeLineChart = wrapper.find(LineChart);
    expect(shouldBeLineChart).toBeDefined();
  });

  it('opacity function does not throw errors when called', () => {
    const chartConfig = wrapper.find(LineChart);
    chartConfig.prop('chartConfig').color();
  });
})
