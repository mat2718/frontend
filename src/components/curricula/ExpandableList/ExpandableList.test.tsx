import React from 'react';
import { mount } from 'enzyme';
import { ExpandableList } from './';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { wrapInStoreProvider } from '../../../../__tests__/functions';

let wrapper: any;

describe('ExpandableList', () => {
  beforeEach(() => {
    wrapper = mount(
      <ExpandableList
        item=[{
          batches: [7, 9, 3],
          createdBy: 'First Creator',
          createdOn: '2021-08-03',
          id: 0,
          lastModified: 'First Creator',
          lastModifiedBy: '2021-08-03',
          name: 'Curriculum 1',
          skills: ['JS', 'TS', 'React', 'React-Native'],
        }]
        onPress={() => {
          /** function here??? */
        }}
      />
    );
  });

  // tests if the component is there
  it('should be there', () => {
    expect(wrapper).toBeDefined();
  });

  //tests if button navigates to AddEdit Screen
  it('Should navigate after button press', () => {
  });

});
