import React from 'react';
import { mount } from 'enzyme';
import EditBatch from '.';

/**
 * Edit Batch Test - test file for the EditBatch screen
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
const UpdateExistingBatch = () => {
  return null;
};

/** test suite */
describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <EditBatch
        route={{
          params: {
            batchid: 1,
            curriculumid: 1,
            trainerid: 1,
            batchsize: 25,
            startdate: 'start date lol',
            enddate: 'end date lol',
          },
        }}
      />
    );
  });

  /** tests if the component is there */
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  /** Tests the edit button, this is probably not the right way to do it */
  it('pressing the button navigates to new screen', () => {
    let button = wrapper.find({ testID: 'editButton' }).last();
    button.invoke('onPress')();
    expect(mockNavigate).toHaveBeenCalledWith(() => UpdateExistingBatch());
  });
});
