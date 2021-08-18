import React from 'react';
import ViewBatch from '.';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import configureStore from 'redux-mock-store';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList } from 'react-native';

let wrapper: any;

/** mock react navigation */
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

/** testState */
let batchesState = [
  {
    batchid: 50,
    batchsize: 12,
    enddate: '2021-08-09T00:00:00.000Z',
    startdate: '2021-08-09T00:00:00.000Z',
    trainerid: 1,
    clientid: null,
    confirmed: false,
    curriculumid: 1,
  },
  {
    batchid: 51,
    batchsize: 12,
    enddate: new Date(Date.now() + 24 * 60 * 60 * 1000),
    startdate: new Date(Date.now() - 24 * 60 * 60 * 1000),
    trainerid: 1,
    clientid: null,
    confirmed: false,
    curriculumid: 1,
  },
  {
    batchid: 52,
    batchsize: 12,
    enddate: new Date(Date.now() + 24 * 60 * 60 * 2000),
    startdate: new Date(Date.now() + 24 * 60 * 60 * 1000),
    trainerid: 1,
    clientid: null,
    confirmed: true,
    curriculumid: 1,
  },
];

/** testState */
let oneBatchState = [
  {
    batchsize: 12,
    curriculumname: 'React Native Cloud Native',
    enddate: '2021-08-09T00:00:00.000Z',
    startdate: '2021-08-09T00:00:00.000Z',
    trainerfirst: 'Robert',
    trainerlast: 'Connell',
    clientid: null,
    batchid: 50,
    confirmed: false,
    skillnamearr: ['JavaScript', 'Java'],
  },
  {
    batchid: 51,
    batchsize: 12,
    curriculumname: 'React Native Cloud Native',
    enddate: new Date(Date.now() + 24 * 60 * 60 * 1000),
    startdate: new Date(Date.now() - 24 * 60 * 60 * 1000),
    trainerfirst: 'Robert',
    trainerlast: 'Connell',
    clientid: null,
    confirmed: false,
    skillnamearr: ['JavaScript', 'Java'],
  },
  {
    batchid: 52,
    batchsize: 12,
    curriculumname: 'React Native Cloud Native',
    enddate: new Date(Date.now() + 24 * 60 * 60 * 2000),
    startdate: new Date(Date.now() + 24 * 60 * 60 * 1000),
    trainerfirst: 'Robert',
    trainerlast: 'Connell',
    clientid: null,
    confirmed: false,
    skillnamearr: ['JavaScript', 'Java'],
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
  onebatch: oneBatchState,
  curricula: curriculumState,
  trainers: trainerState,
});

describe('tests the ViewBatch screen', () => {
  beforeEach(() => {
    wrapper = mount(
      <NavigationContainer>
        <Provider store={mockStore}>
          <PaperProvider>
            <ViewBatch
              route={{
                params: {
                  curriculum: {
                    curriculumId: 1,
                    skillnamearr: [],
                  },
                  trainerId: 1,
                  batchId: 50,
                },
              }}
            />
          </PaperProvider>
        </Provider>
      </NavigationContainer>
    );
  });

  /** tests if the component is there */
  it('should be there', () => {
    wrapper = mount(
      <Provider store={mockStore}>
        {' '}
        <ViewBatch {...props} />{' '}
      </Provider>
    );
    expect(wrapper).not.toBe(undefined);
  });

  /** Tests the edit batch button */
  it('pressing the button navigates to the edit batch screen', () => {
    let button = wrapper
      .find('TouchableOpacity')
      .findWhere((node: any) => node.props().hasOwnProperty('onPress'))
      .at(0);

    button.invoke('onPress')();
    expect(mockNavigate).toHaveBeenCalledWith('EditBatch', {
      batchid: 50,
      batchsize: 12,
      trainerid: 1,
      curriculumid: 1,
      startdate: '2021-08-09T00:00:00.000Z',
      enddate: '2021-08-09T00:00:00.000Z',
    });
  });

  /** Tests the confirm batch button */
  it('should press the confirm batch button', () => {
    let button = wrapper
      .find('TouchableOpacity')
      .findWhere((node: any) => node.props().hasOwnProperty('onPress'))
      .at(1);

    button.invoke('onPress')();
  });

  /** Tests the delete batch button */
  it('should press the delete batch button', () => {
    let button = wrapper
      .find('TouchableOpacity')
      .findWhere((node: any) => node.props().hasOwnProperty('onPress'))
      .at(2);

    button.invoke('onPress')();
  });

  it('should show the active batch', () => {
    wrapper = mount(
      <NavigationContainer>
        <Provider store={mockStore}>
          <PaperProvider>
            <ViewBatch
              route={{
                params: {
                  curriculum: {
                    curriculumId: 1,
                    skillnamearr: [],
                  },
                  trainerId: 1,
                  batchId: 51,
                },
              }}
            />
          </PaperProvider>
        </Provider>
      </NavigationContainer>
    );
  });

  it('should show the upcoming batch', () => {
    wrapper = mount(
      <NavigationContainer>
        <Provider store={mockStore}>
          <PaperProvider>
            <ViewBatch
              route={{
                params: {
                  curriculum: {
                    curriculumId: 1,
                    skillnamearr: [],
                  },
                  trainerId: 1,
                  batchId: 52,
                },
              }}
            />
          </PaperProvider>
        </Provider>
      </NavigationContainer>
    );
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
        return node.props().hasOwnProperty('onRefresh');
      })
      .forEach((node: any) => {
        node.invoke('onRefresh')();
      });
  });
});
