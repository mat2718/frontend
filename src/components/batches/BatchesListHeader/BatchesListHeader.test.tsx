import React from 'react';
import { mount, shallow } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import BatchesListHeader from '.';
import { Picker } from '@react-native-picker/picker';

let wrap: any;
const selectedFilter = 'all';
const setSelectedFilter = (filter: string) => {
  return filter;
};

const props = {
  selectedFilter: 'any',
  setSelectedFilter: () => {
    return null;
  },
};

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return {
        navigate: mockNavigate,
      };
    },
  };
});

describe('Batches', () => {
  beforeEach(() => {
    wrap = mount(<BatchesListHeader {...props} />);
  });

  /** tests if the component is there */
  it('should be there', () => {
    expect(wrap).not.toBe(undefined);
  });

  /** tests the onpress when navigating */
  it('should be pressed', () => {
    const shouldBePressed = wrap.find(TouchableOpacity).at(0);

    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });

  /** tests the navigate button */
  it('pressing the button navigates to new screen', () => {
    let wrapper = shallow(<BatchesListHeader {...props} />);
    let button = wrapper.find({ testID: 'button' }).last();
    button.invoke('onPress')();
    expect(mockNavigate).toHaveBeenCalledWith('AddEditBatch');
  });

  it('Event handler for picker does not throw errors', () => {
    wrap.find(Picker).invoke('onValueChange')();
  });
});
