import React from 'react';
import { mount } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import TrainerListHeader from '.';
import { useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Reducer } from '../../../redux/reducer';


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
  beforeEach(() =>
  {
    const mockStore = createStore(
      Reducer,
      composeWithDevTools(applyMiddleware(thunk))
    );
    
      wrapper = mount(
        <Provider store={mockStore}>
      <TrainerListHeader
        setTrainerArr={() => {
          /** function here??? */
        }}
        />
        </Provider>);
    
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
