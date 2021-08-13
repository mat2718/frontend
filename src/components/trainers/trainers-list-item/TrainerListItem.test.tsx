import React from 'react';
import { mount } from 'enzyme';
import TrainerListItem from '.';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ITrainer from '../../../Entities/Trainer';

let wrapper: any;

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () =>
{
  return ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () =>
    {
      return ({
        navigate: mockNavigate,
      })
    },
  });
});
describe('Batches', () =>
{
  const trainer: ITrainer = {
    trainerfirst: 'John',
    trainerlast: 'Doe',
    email: 'johndoe@hotmail.com',
    trainerid: 1
  }
  beforeEach(() =>
  {

    wrapper = mount(<TrainerListItem trainer={trainer} />);
  });

  // tests if the component is there
  it('should be there', () =>
  {
    expect(wrapper).not.toBe(undefined);
  });

  // need to reimplement this test
  // it('should navigate to View Trainer', () =>
  // {
  //   const touchable = wrapper.find('TouchableOpacity');
  //   touchable.props().onPress();
  //   const payload = ['ViewEditTrainer', trainer]
  //   expect(mockNavigate).toBeCalledWith(...payload)
  // })
});
