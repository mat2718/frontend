import React from 'react';
import { mount } from 'enzyme';
import ConfirmDialog from '.';

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
        payload={0}
      />
    );
  });

  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });
});
