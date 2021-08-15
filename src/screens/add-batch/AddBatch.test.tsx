import React from 'react';
import { mount } from 'enzyme';
import AddBatch from '.';

/**
 * Add Batch Test - test file for the AddBatch screen
 * @author Matthew Otto and Oriel Red Oral
 */

/** wrapper for mounting */
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

/** mock function for addnewbatch */
const AddNewBatch = () => {
  return null;
};

/** test suite */
describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(<AddBatch />);
  });

  /** tests if the component is there */
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  /** Tests the add button, this is probably not the right way to do it */
  it('pressing the button navigates to new screen', () => {
    let button = wrapper.find({ testID: 'addButton' }).last();
    button.invoke('onPress')();
    expect(mockNavigate).toHaveBeenCalledWith(() => AddNewBatch());
  });
});
