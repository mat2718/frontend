import React from 'react';
import { mount } from 'enzyme';
import Skills from '.';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList } from 'react-native';
import Toast from 'react-native-toast-message';

let wrapper: any;

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

const mockDispatch = jest.fn();
jest.mock('react-redux', () => {
  return {
    ...jest.requireActual('react-redux'),
    useSelector: () => [
      {
        trainerfirst: 'Walter',
        trainerlast: 'Poken',
        email: 'walterpoken@rev.net',
        trainerid: 76345654,
      },
    ],
    useDispatch: () => mockDispatch,
  };
});

describe('tests the Skills component', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <NavigationContainer>
          <Skills />
        </NavigationContainer>
      </Provider>
    );
  });

  it('should be there', () => {
    expect(wrapper).not.toBeUndefined();
  });

  it('should render the flatlist', () => {
    const flatList = wrapper.find(FlatList);
    expect(flatList).toBeDefined();
  });

  it('should hold data', () => {
    const listData = wrapper.find(FlatList).props().data;
    expect(listData.length).toBeGreaterThan(0);
  });

  it('Flatlist responds to onRefresh event', () => {
    wrapper
      .find(FlatList)
      .findWhere((node: any) => {
        return node.props().hasOwnProperty('onRefresh');
      })
      .forEach((node: any) => {
        node.invoke('onRefresh')();
      });
  });
});
