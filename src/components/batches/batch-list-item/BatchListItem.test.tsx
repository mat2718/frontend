import React from 'react';
import { mount } from 'enzyme';
import BatchListItem from '.';

/**
 * Batch List Item Test - test file for the BatchistItemComponent
 * @author Matthew Otto and Oriel Red Oral
 */

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
/** Wrapper for mounting */
let wrapper: any;

const mockProps = {
  batchId: 0,
  batchSize: 25,
  startDate: 'start date lol',
  endDate: 'end date lol',
  curriculum: 0,
  trainer: 0,
  confirmed: true,
};

/** Test suite */
describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <BatchListItem
        batchSize={20}
        batchId={0}
        curriculumId={1}
        trainerId={1}
        startDate='2021-10-11T00:00:00.000Z'
        endDate='2021-10-11T00:00:00.000Z'
        confirmed={true}
      />
    );
  });

  /** Tests if the component exists */
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  /** Tests the navigate button */
  it('pressing the button navigates to new screen', () => {
    let button = wrapper
      .find({ testID: 'button' })
      .findWhere( (node:any) => 
        node.props().hasOwnProperty('onPress') 
      );
    button = button.length ? button.last() : button;
    button.invoke('onPress')();
    expect(mockNavigate).toHaveBeenCalledWith('ViewBatch', mockProps);
  });
});
