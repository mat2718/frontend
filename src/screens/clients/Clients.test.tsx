import React from 'react';
import { mount } from 'enzyme';
import Clients from '.';
import { FlatList } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Reducer } from '../../redux/reducer';
import thunk from 'redux-thunk';

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return ({
    __esModule: true,
    useNavigation: () => {
      return ({
        navigate: mockNavigate,
        goBack: mockGoBack,
      });
    },
  });
});


let wrapper: any;
const store = createStore(Reducer, applyMiddleware(thunk))

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Clients />;
      </Provider>)
  });

  //tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  // tests if the flatlist is defined
  it('should display the flatlist', () => {
    const shouldBeFlatlist = wrapper.find(FlatList);
    expect(shouldBeFlatlist).toBeDefined();
  });

  // tests if the flatlist holds the data we need
  it('should hold data', () => {
    const listData = wrapper.find(FlatList).props().data;
    expect(listData).toBe(store.clients);
  });
});

