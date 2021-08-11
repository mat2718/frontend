import React from 'react';
import { mount } from 'enzyme';
import TrainerListItem from './';
import { TouchableOpacity } from 'react-native';

let wrapper: any;

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(<TrainerListItem name='Robert Connell' email='robcon@revature.net' />);
  });

  // tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });
});
