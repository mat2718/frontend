import React from 'react';
import { mount } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import CurriculaListHeader from '.';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return ({ 
        navigate: mockNavigate 
      });
    },
  });
}); 

let wrapper: any;
const testState = {};
const store = configureStore([thunk])(testState);

describe('CurriculaListHeader', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store} >
        <CurriculaListHeader /> 
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
