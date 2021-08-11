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
      email='robcon@revature.net'
    />
  ); //)
  const shallowWrapper = shallow(
    /*wrapComponent(returnComponent(*/ <MainTrainer
      name='Robert Connell'
      email='robcon@revature.net'
    />
  ); //)

  test('Should have all components', () => {
    expect(shallowWrapper.find('FlatList')).toHaveLength(1);
    //const wrap = shallowWrapper.find('FlatList');
  });
});
