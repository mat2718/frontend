import React from 'react';
import { mount } from 'enzyme';
import ViewBatch from './index';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

/**
 * View Batch Test - test file for the ViewBatch screen
 * @author Matthew Otto and Oriel Red Oral
 */

/** wrapper for mounting */
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
    enddate: '2021-08-16T00:00:00.000Z',
    startdate: '2021-08-16T00:00:00.000Z',
    trainerid: 20,
    clientid: null,
    confirmed: true,
    curriculumid: 2,
  },
];

/** mockStore */
let mockStore = configureStore([thunk])({
  batches: batchesState,
});

/** mock dispatch */
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

/** test suite */
describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <ViewBatch
          route={{
            params: {
              curriculum: {
                curriculumId: 0,
                skillnamearr: [],
              },
              trainerId: 1,
              batchId: 1,
            },
          }}
        />
      </Provider>
    );
  });

  /** tests if the component is there */
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  /** Tests the edit batch button */
  it('pressing the button navigates to new screen', () => {
    let button = wrapper.find({ testID: 'editButton' }).last();
    button.invoke('onPress')();
    expect(mockNavigate).toHaveBeenCalledWith('EditBatch', {
      batchid: 1,
      batchsize: 20,
      trainerid: 1,
      curriculumid: 1,
      startdate: 'start date lol',
      enddate: 'end date lol',
    });
  });
});
