import React from 'react';
import { TouchableOpacity } from 'react-native';
import { mount } from 'enzyme';
import ViewClient from '.';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Reducer } from '../../redux/reducer';
import thunk from 'redux-thunk';

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return ({
        navigate: mockNavigate,
        goBack: mockGoBack,
      });
    },
  });
});

let wrapper: any;
const store = createStore(Reducer, applyMiddleware(thunk));

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
    <Provider store={store}>
      <ViewClient
        route={{
          params: {
            clientid: 2,
            clientname: 'Revature'
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
      .findWhere( (node:any) => 
        node.props().hasOwnProperty('onPress')
      )
      .last()

    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });
});


