import React from 'react';
import { mount } from 'enzyme';
import ConfirmDialog from '.';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return ({ 
        goBack: mockGoBack,
      });
    },
  });
})

const mockDispatch = jest.fn();
jest.mock('react-redux', () => {
  return ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch,
  });
});

/**
 * Confirm Dialog Test - test file for the ConfirmDialogComponent
 * @author Oriel Red Oral
 */

let wrapper: any;

describe('tests the confirm dialog component', () => {
  beforeEach(() => {
    wrapper = mount(
      <ConfirmDialog
        type='confirmBatch'
        visible={true}
        setVisible={() => {
          return null;
        }}
        payload={{
          batchId: 0,
          trainerId: 0,
          curriculumId: 0,
          skillId: 0,
        }}
      />
    );
  });

  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });
});
