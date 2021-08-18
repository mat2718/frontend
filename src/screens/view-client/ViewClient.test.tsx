import React from 'react';
import { TouchableOpacity } from 'react-native';
import { mount } from 'enzyme';
import ViewClient from '.';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import configureStore from 'redux-mock-store';
import { Reducer } from '../../redux/reducer';
import thunk from 'redux-thunk';
import { FlatList } from 'react-native';

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return {
        navigate: mockNavigate,
        goBack: mockGoBack,
      };
    },
  };
});

let wrapper: any;

/** mockStore */
let mockStore = configureStore([thunk])({
  demands: [
    {
      demandid: 2,
      clientid: 2,
      curriculumid: 2,
      needby: '2021-08-30T00:00:00.000Z',
      quantitydemanded: 12,
    },
  ],
});

describe('tests ViewClient', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <ViewClient
          route={{
            params: {
              clientid: 2,
              clientname: 'Revature',
            },
          }}
        />
      </Provider>
    );
  });

  //tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  /** tests the edit batch button */
  it('should be pressed', () => {
    const shouldBePressed = wrapper
      .find(TouchableOpacity)
      .findWhere((node: any) => node.props().hasOwnProperty('onPress'))
      .last();

    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });

  it('should display the flatlist', () => {
    const shouldBeFlatlist = wrapper.find(FlatList);
    expect(shouldBeFlatlist).toBeDefined();
  });

  it('should hold data', () => {
    const listData = wrapper.find(FlatList).props().data;
    expect(listData.length).toBeGreaterThan(0);
  });

  it('Flatlist responds to onRefresh event', () => {
    wrapper
      .find(FlatList)
      .findWhere((node: any) => {
        return node.props().hasOwnProperty('onChange');
      })
      .forEach((node: any) => {
        node.invoke('onRefresh')();
      });
  });
});
