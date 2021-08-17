import React from 'react';
import { mount } from 'enzyme';
import DemandsListItem from '.';

/**
 * DemandsListItem - test file for the DemandsListItem component
 * @author  Oriel Red Oral
 */

let wrapper: any;

describe('tests DemandsListItem', () => {
  beforeEach(() => {
    wrapper = mount(
      <DemandsListItem
        curriculumid={2}
        needby={Date.now()}
        quantitydemanded={25}
      />
    );
  });

  // tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });
});
