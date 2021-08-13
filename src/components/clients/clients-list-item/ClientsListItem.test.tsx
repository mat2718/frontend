import React from 'react';
import { mount } from 'enzyme';
import ClientsListItem from '.';
import { TouchableOpacity } from 'react-native';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return ({
    __esModule: true,
    useNavigation: () => {
      return ({
        navigate: mockNavigate,
      }) 
    },
  });
});

let wrapper: any;

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(<ClientsListItem client='Revature' />);
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
