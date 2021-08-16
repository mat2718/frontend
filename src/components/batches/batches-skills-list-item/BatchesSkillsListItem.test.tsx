import React from 'react';
import { mount } from 'enzyme';
import BatchesSkillsListItem from '.';

/**
 * Batch Skill List Item - test file for the BatchesSkillsListItem
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

/** Test suite */
describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(<BatchesSkillsListItem skillname='skill' />);
  });

  /** Tests if the component exists */
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });
});
