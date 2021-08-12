import React from 'react';
import { mount } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import CurriculaListHeader from '.';

let wrapper: any;

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(<CurriculaListHeader />);
  });

  /** tests if the component is there */
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  /** tests the onpress when navigating */
  it('should be pressed', () => {
    const shouldBePressed = wrapper.find(TouchableOpacity).at(0);

    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });
});
