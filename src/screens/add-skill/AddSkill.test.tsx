import React from 'react';
import { mount } from 'enzyme';
import AddSkill from '.';
import { NavigationContainer } from '@react-navigation/native';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { FlatList } from 'react-native';
import Toast from 'react-native-toast-message';

/** mock react navigation */
const mockBack = jest.fn();
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return {
        goBack: mockBack,
        navigate: mockNavigate,
      };
    },
  };
});

/** mockStore */
let mockStore = configureStore([thunk])({
  skills: [
    {
      skillid: 1,
      skillname: 'Java',
    },
    {
      skillid: 2,
      skillname: 'JavaScript',
    },
  ],
});

let wrapper: any;

describe('tests the AddSkill component', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <NavigationContainer>
          <Toast ref={(ref) => Toast.setRef(ref)} />
          <AddSkill />
        </NavigationContainer>
      </Provider>
    );
  });

  it('should be there', () => {
    expect(wrapper).not.toBeUndefined();
  });

  it('should try to add a skill', () => {
    let button = wrapper
      .find('TouchableOpacity')
      .findWhere((node: any) => node.props().hasOwnProperty('onPress'))
      .last();

    wrapper
      .find({ testID: 'skillNameInput' })
      .findWhere((node: any) => {
        return node.props().hasOwnProperty('onChange');
      })
      .forEach((node: any) => {
        node.invoke('onChange')({ target: { value: 'Hello' } });
        node.invoke('onChange')();
      });

    button.invoke('onPress')();
  });
});
