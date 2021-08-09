import React from 'react';
import { TouchableOpacity } from 'react-native';
import { mount } from 'enzyme';
import Header from '../../components/batches/Header';
import ViewBatch from './';

let wrapper: any;

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <ViewBatch
        associate={25}
        batchId={0}
        curriculum='Cloud Native'
        trainer='Robert Connell'
        startDate={1622505600000}
        endDate={1627776000000}
      />
    );
  });

  //tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  // tests if the header is defined
  it('should display the header', () => {
    const shouldBeHeader = wrapper.find(Header);
    expect(shouldBeHeader).toBeDefined();
  });

  /** tests the edit batch button */
  it('should be pressed', () => {
    const shouldBePressed = wrapper.find(TouchableOpacity).at(0);

    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });
});

// yeet
