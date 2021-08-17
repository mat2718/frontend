import React from 'react';
import { mount } from 'enzyme';
import Batches from '.';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Navigation from '../../navigation';

let wrapper: any;

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

/** testState */
let batchesState = [
  {
    batchid: 50,
    batchsize: 0,
    enddate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    startdate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    trainerid: 20,
    clientid: null,
    confirmed: true,
    curriculumid: 2,
  },
  {
    batchid: 50,
    batchsize: 1,
    enddate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    startdate: new Date(Date.now() + 24 * 60 * 60 * 2000).toISOString(),
    trainerid: 20,
    clientid: null,
    confirmed: true,
    curriculumid: 2,
  },
  {
    batchid: 50,
    batchsize: 2,
    enddate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    startdate: new Date(Date.now() - 24 * 60 * 60 * 2000).toISOString(),
    trainerid: 20,
    clientid: null,
    confirmed: true,
    curriculumid: 2,
  },
];

/** testState */
let curriculumState = [
  {
    curriculumid: 1,
    createdby: '2106RNCN',
    createdon: '2021-08-09T00:00:00.000Z',
    lastmodified: '2021-08-09T00:00:00.000Z',
    lastmodifiedby: '2106RNCN',
    curriculumname: 'React Native Cloud Native',
    skillidarr: [1],
    skillnamearr: ['JavaScript'],
  },
];

/** testState */
let trainerState = [
  {
    trainerid: 1,
    email: 'Matt.oberlin@yahoo.com',
    trainerfirst: 'Matt',
    trainerlast: 'Oberlin',
  },
];

/** mockStore */
let mockStore = configureStore([thunk])({
  batches: batchesState,
  trainers: trainerState,
  curricula: curriculumState,
});

describe('tests the Batches component', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <NavigationContainer>
          <Batches />
        </NavigationContainer>
      </Provider>
    );
  });

  it('should be there', () => {
    expect(wrapper).not.toBeUndefined();
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

  it('should change the picker value', () => {
    wrapper
      .find(Picker)
      .findWhere((node: any) => {
        return node.props().hasOwnProperty('onValueChange');
      })
      .forEach((node: any) => {
        node.invoke('onValueChange')('active', 1);
        node.invoke('onValueChange')('upcoming', 2);
        node.invoke('onValueChange')('completed', 3);
      });
  });
});
