import React from 'react';
import axios from 'axios';
import { mount } from 'enzyme';
import TrainerListItem from '.';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ITrainer from '../../../Entities/Trainer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Reducer } from '../../../redux/reducer';
import Toast from 'react-native-toast-message'

let wrapper: any;
jest.mock('axios');
jest.mock('react-native-toast-message');
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
describe('Trainer list', () =>
{
  const trainer: ITrainer = {
    trainerfirst: 'John',
    trainerlast: 'Doe',
    email: 'johndoe@hotmail.com',
    trainerid: 1
  }
  beforeEach(() =>
  {

    const mockStore = createStore(
      Reducer,
      composeWithDevTools(applyMiddleware(thunk))
    );
    wrapper = mount(
      <Provider store={mockStore}>
        <TrainerListItem trainer={trainer} />
        </Provider>);
  });

  // tests if the component is there
  it('should be there', () =>
  {
    expect(wrapper).not.toBe(undefined);
  });

  //need to reimplement this test
  it('should navigate to Edit Trainer', () =>
  {
    wrapper.find('Picker').invoke('onValueChange')('Edit', 1);
    const payload = ['ViewEditTrainer', trainer]
    expect(mockNavigate).toBeCalledWith(...payload)
  })
  it('should delete a trainer when selected', () =>
  {
    wrapper.find('Picker').invoke('onValueChange')('Delete', 2);
  })

});
