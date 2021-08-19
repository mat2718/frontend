import React from 'react';
import { mount } from 'enzyme';
import { FlatList, TouchableOpacity } from 'react-native';
import AddClient from '.';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Reducer } from '../../redux/reducer';
import thunk from 'redux-thunk';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return ({
    __esModule: true,
    useNavigation: () => {
      return ({
        goBack: mockGoBack,
      }) 
    },
  });
});

jest.mock('react-native-toast-message', () => {
  return ({
    __esModule: true,
    default: {
      show: jest.fn(),
    },
  });
});

let wrapper: any;
const store = createStore(Reducer, applyMiddleware(thunk));

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <AddClient />;
      </Provider>)
  });

  //tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  // tests the add button
  it('should be pressed', () => {
    const shouldBePressed = wrapper
      .find(TouchableOpacity)
      .findWhere( (node:any) => 
        node.props().hasOwnProperty('onPress')
      )
      .last();

    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });
});