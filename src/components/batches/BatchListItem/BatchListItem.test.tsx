import React from 'react';
import { mount } from 'enzyme';
import { BarChart } from 'react-native-chart-kit';
import BatchListItem from './';
import { TouchableOpacity } from 'react-native';

let wrapper: any;

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <BatchListItem
        associate={25}
        batchId={0}
        curriculum='Cloud Native'
        trainer='Robert Connell'
        startDate={1622505600000}
        endDate={1627776000000}
      />
    );
  });

  // tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  // tests if the barchart is defined
  it('should be pressable', () => {
    const shouldBePressed = wrapper.find(TouchableOpacity).at(0);
    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });
});
