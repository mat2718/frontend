import React from 'react';
import { mount, shallow } from 'enzyme';
import MainTrainer from '.';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { FlatList } from 'react-native';
import { Reducer } from '../../redux/reducer';
import { Provider as PaperProvider } from 'react-native-paper';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return {
        navigate: mockNavigate,
        // see https://reactnavigation.org/docs/navigation-prop/.
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

/** mockStore */
let mockStore = configureStore([thunk])({
  trainers: [
    {
      trainerid: 1,
      email: 'Joab.smith@revature.net',
      trainerfirst: 'Joab',
      trainerlast: 'Smith',
    },
    {
      trainerid: 2,
      email: 'Don.chic@gmail.com',
      trainerfirst: 'Imran',
      trainerlast: 'Ilyas',
    },
    {
      trainerid: 3,
      email: 'Caleb.m.sword@revature.net',
      trainerfirst: 'Caleb',
      trainerlast: 'Sword',
    },
  ],
});

describe('Main Trainer', () => {
  // const mockStore = createStore(
  //   Reducer,
  //   composeWithDevTools(applyMiddleware(thunk))
  // );

  const wrapper = mount(
    <Provider store={mockStore}>
      <PaperProvider>
        <MainTrainer />
      </PaperProvider>
    </Provider>
  );

  const shallowWrapper = shallow(<MainTrainer />);
  // trainerfirst='Forever'
  // trainerlast='Young'
  // email='fyoung@rev.net'
  // trainerid= {7654}

  test('Should have all components', () => {
    expect(shallowWrapper.find('FlatList')).toHaveLength(1);
    //const wrap = shallowWrapper.find('FlatList');
  });

  it('should display the flatlist', () => {
    const shouldBeFlatlist = wrapper.find(FlatList);
    expect(shouldBeFlatlist).toBeDefined();
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
