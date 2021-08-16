import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { FlatList } from 'react-native';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Batches from '.';
/**
 * Batches Test  - main test file for the batches screen
 * @author Matthew Otto and Oriel Red Oral
 */

/** mock dispatch */
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

/** testState */
let batchesState = [
  {
    batchid: 50,
    batchsize: 12,
    enddate: '2021-08-16T00:00:00.000Z',
    startdate: '2021-08-16T00:00:00.000Z',
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

/** mock react navigation */
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return {
        navigate: mockNavigate,
      };
    },
  };
});

/** wrapper for mounting */
let wrapper: any;

/** test suite */
describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <Batches />
      </Provider>
    );
  });

  /** tests if the component is there */
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  // tests if the flatlist is defined
  it('should display the flatlist', () => {
    const shouldBeFlatlist = wrapper.find(FlatList);
    expect(shouldBeFlatlist).toBeDefined();
  });

  it('should hold data', () => {
    const listData = wrapper.find(FlatList).props().data;
    expect(listData.length).toBeGreaterThan(0);
  });
});
