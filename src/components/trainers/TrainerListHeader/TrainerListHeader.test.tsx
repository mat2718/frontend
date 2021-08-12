import React from 'react';
import { mount } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import TrainerListHeader from '.';
import { useNavigation } from '@react-navigation/native';


const mockNavigate = jest.fn();
jest.mock('@react-navigation/native' , () => {
  return ({
    ...jest.requireActual('@react-navigation/native'),
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

describe('TrainerListHeader', () => {
  beforeEach(() => {
    wrapper = mount(
      <TrainerListHeader
        setTrainerArr={() => {
          /** function here??? */
        }}
        trainerArray={['Hi', 'Hello']}
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
