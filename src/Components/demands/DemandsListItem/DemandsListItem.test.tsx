import React from 'react';
import { mount } from 'enzyme';
import DemandsListItem from './';
import { TouchableOpacity } from 'react-native';

let wrapper: any;

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <DemandsListItem
        curriculum='React Native'
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
