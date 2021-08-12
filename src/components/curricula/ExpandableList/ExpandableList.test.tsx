import React from 'react';
import { mount } from 'enzyme';
import { BarChart } from 'react-native-chart-kit';
import { ExpandableList } from './';
import { TouchableOpacity } from 'react-native';

let wrapper: any;

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <ExpandableList
        item='idk'
        onPress={() => {
          /** function here??? */
        }}
      />
    );
  });

  // tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });
});
