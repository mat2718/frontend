import React from 'react';
import { mount, shallow } from 'enzyme';
import ViewEditTrainer from '.';
/**
 * Authors: Joab Smith and Imran Ilyas
 **/
describe('View/Edit Trainer', () => {
  const wrapper = mount(
    /*wrapComponent(returnComponent(*/ <ViewEditTrainer default={false} />
  ); //)
  const shallowWrapper = shallow(
    /*wrapComponent(returnComponent(*/ <ViewEditTrainer default={false} />
  ); //)

  test('Should have all components', () => {
    expect(shallowWrapper.find('ViewTrainer')).toHaveLength(1);
    const shallowWrapperTrue = shallow(
      /*wrapComponent(returnComponent(*/ <ViewEditTrainer default={true} />
    ); //)
    expect(shallowWrapperTrue.find('EditTrainer')).toHaveLength(1);
  });
});
