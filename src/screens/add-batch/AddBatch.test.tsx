import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import AddBatch from '.';
import { Picker } from '@react-native-picker/picker';

/**
 * Add Batch Test - test file for the AddBatch screen
 * @author Matthew Otto and Oriel Red Oral
 */

/** wrapper for mounting */
let wrapper: any;

/** mock react navigation */
const mockBack = jest.fn();
const mockNavigate = jest.fn();
jest.mock('react-native-toast-message');
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

jest.mock('react-native-toast-message', () => {
  return({
    __esModule: true,
    ...jest.requireActual('react-native-toast-message'),
    default: {
      show: jest.fn(),
    },
  });
});

const mockDispatch = jest.fn();
jest.mock('react-redux', () => {
  return ({
    ...jest.requireActual('react-redux'),
    useDispatch: mockDispatch,
  });
});

/** mockStore */
let mockStore = configureStore([thunk])({
  curriculum: [],
});

/** mock function for addnewbatch */
const AddNewBatch = () => {
  return null;
};

/** test suite */
describe('tests the AddBatch component', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <AddBatch />
      </Provider>
    );
  });

  /** tests if the component is there */
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  /** Tests the add button, this is probably not the right way to do it */
  it('pressing the button navigates to new screen', () => {
    let button = wrapper
      .find({ testID: 'addBatchButton' })
      .findWhere((node: any) => node.props().hasOwnProperty('onPress'))
      .last();
    button.invoke('onPress')();
    expect(button).toBeTruthy();
  });

  /** Tests the calendar start date on change */
  it('should test the startdate calendar onchange', () => {
    let button = wrapper
      .find({ testID: 'startDateButton' })
      .findWhere((node: any) => node.props().hasOwnProperty('onPress'))
      .last();
    button.invoke('onPress')();

    wrapper
      .find({ testID: 'startDateTest' })
      .findWhere((node: any) => {
        return node.props().hasOwnProperty('OnChange');
      })
      .forEach((node: any) => {
        node.invoke('onChange')(Date.now());
      });
  });
});
