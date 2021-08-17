import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Text } from 'react-native';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import BatchListItem from '.';
import * as axios from 'axios';

const mockCurriculum = {
  curriculumName: '',
};
jest.mock('axios');

/**
 * Batch List Item Test - test file for the BatchistItemComponent
 * @author Matthew Otto and Oriel Red Oral
 */

/** Wrapper for mounting */
let wrapper: any;

/** Mock react navigation */
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

/** mockProps for this component */
const mockProps = {
<<<<<<< HEAD
  batchId: 0,
  batchSize: 25,
  startDate: 'start date lol',
  endDate: 'end date lol',
  curriculum: mockCurriculum,
  trainer: 0,
  confirmed: true,
=======
  batchId: 1,
  batchSize: 20,
  curriculumId: 1,
  trainerId: 1,
  startDate: new Date(Date.now()).toISOString(),
  endDate: new Date(Date.now()).toISOString(),
  confirmed: false,
>>>>>>> dev-branch
};

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
  trainers: trainerState,
  curricula: curriculumState,
});

/** Test suite */
describe('tests BatchListItem', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <BatchListItem {...mockProps} />
      </Provider>
    );
  });

  /** Tests if the component exists */
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  /** Tests the navigate button */
  it('pressing the button navigates to new screen', () => {
    axios.get.mockResolvedValue(mockCurriculum);
    let button = wrapper
<<<<<<< HEAD
      .find({ testID: 'button' })
      .findWhere( (node:any) => 
        node.props().hasOwnProperty('onPress') 
      );
    button = button.length ? button.last() : button;
=======
      .find({ testID: 'viewBatchButton' })
      .findWhere((node: any) => node.props().hasOwnProperty('onPress'))
      .last();
>>>>>>> a1b5ce57aaf2b30a6a65812a47ea7132fc4ed4aa
    button.invoke('onPress')();
<<<<<<< HEAD
    expect(mockNavigate).toHaveBeenCalled(); // don't test implementation details
=======
    expect(mockNavigate).toHaveBeenCalled();
  });

  /** Tests the useSelector for curriculum */
  it('should test the curriculum state from redux', () => {
    expect(
      wrapper
        .find(Text)
        .someWhere((node: any) =>
          node.text().includes(curriculumState[0].curriculumname)
        )
    ).toBeTruthy();
  });

  /** Tests the useSelector for trainers */
  it('should test the trainers state from redux', () => {
    expect(
      wrapper
        .find(Text)
        .someWhere((node: any) =>
          node.text().includes(trainerState[0].trainerfirst)
        )
    ).toBeTruthy();
  });

  /** Tests if the upcoming badge shows */
  it('tests if the upcoming badge shows', () => {
    const upcoming = mount(
      <Provider store={mockStore}>
        <BatchListItem
          batchId={1}
          batchSize={20}
          curriculumId={1}
          trainerId={1}
          startDate={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()}
          endDate={new Date(Date.now() + 24 * 60 * 60 * 2000).toISOString()}
          confirmed={false}
        />
      </Provider>
    );
    expect(upcoming).toBeTruthy();
  });

  /** Tests if the active badge shows */
  it('tests if the active badge shows', () => {
    const active = mount(
      <Provider store={mockStore}>
        <BatchListItem
          batchId={1}
          batchSize={20}
          curriculumId={1}
          trainerId={1}
          startDate={new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()}
          endDate={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()}
          confirmed={false}
        />
      </Provider>
    );
    expect(active).toBeTruthy();
  });

  /** Tests if the completed badge shows */
  it('tests if the completed badge shows', () => {
    const completed = mount(
      <Provider store={mockStore}>
        <BatchListItem
          batchId={1}
          batchSize={20}
          curriculumId={1}
          trainerId={1}
          startDate={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()}
          endDate={new Date(Date.now() - 24 * 60 * 60 * 2000).toISOString()}
          confirmed={false}
        />
      </Provider>
    );
    expect(completed).toBeTruthy();
>>>>>>> dev-branch
  });
});
