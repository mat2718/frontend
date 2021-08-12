import React from 'react';
import { TouchableOpacity } from 'react-native';
import { mount } from 'enzyme';
import Header from '../../components/batches/Header';
import AddEditBatch from '.';

let wrapper: any;

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <AddEditBatch
        route={{
          params: {
            associates: 25,
            batchId: 0,
            curriculum: 'Cloud Native',
            trainer: 'Robert Connell',
            startDate: 1622505600000,
            endDate: 1627776000000,
          },
        }}
      />
    );
  });

  //tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  // tests if the header is defined
  it('should display the header', () => {
    const shouldBeHeader = wrapper.find(Header);
    expect(shouldBeHeader).toBeDefined();
  });
});

// yeet
