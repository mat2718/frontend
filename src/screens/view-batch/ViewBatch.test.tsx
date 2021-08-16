import React from 'react';
import { mount } from 'enzyme';
import ViewBatch from '.';

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

/** test suite */
describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
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
