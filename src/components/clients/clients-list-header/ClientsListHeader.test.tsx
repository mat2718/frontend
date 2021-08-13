import React from 'react';
import { mount } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import ClientsListHeader from '.';

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
const selectedFilter = 'all';
const setSelectedFilter = (filter: string) => {
  return filter;
};

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <ClientsListHeader
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    );
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
