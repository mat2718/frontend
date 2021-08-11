import React from 'react';
import { mount, shallow } from 'enzyme';
import MainTrainer from '.';
/**
 * Authors: Joab Smith and Imran Ilyas
 **/
describe('Main Trainer', () => {
  const wrapper = mount(
    /*wrapComponent(returnComponent(*/ <MainTrainer
      name='Robert Connell'
      ID='0'
    />
  ); //)
  const shallowWrapper = shallow(
    /*wrapComponent(returnComponent(*/ <MainTrainer
      name='Robert Connell'
      ID='0'
    />
  ); //)

  test('Should have all components', () => {
    expect(shallowWrapper.find('ViewFlatList')).toHaveLength(1);
    expect(shallowWrapper.find('SearchBar')).toHaveLength(1);
    //Find add trainer button
    const add = wrapper
      .find('TouchableOpacity')
      .findWhere((w) => w.text() === 'Add Trainer')
      .first();
    expect(add).toHaveLength(1);
  });
});
