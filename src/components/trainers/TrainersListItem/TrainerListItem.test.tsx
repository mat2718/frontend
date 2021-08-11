import React from 'react';
import { mount } from 'enzyme';
import TrainerListItem from './';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

let wrapper: any;

describe('Batches', () =>
{
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
  beforeEach(() => {
    wrapper = mount(<TrainerListItem name='Robert Connell' email='robcon@revature.net' />);
  });

  // tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  it('should navigate to View Trainer', () =>
  {
    const touchable = wrapper.find('TouchableOpacity');
    touchable.props().onPress();
    const payload = ['ViewEditTrainer', {name:'Robert Connell', email:'robcon@revature.net'}]
    expect(mockNavigate).toBeCalledWith(...payload)
  })
});
