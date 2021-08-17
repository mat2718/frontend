import React from 'react';
import { mount } from 'enzyme';
import { ExpandableList } from '.';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { wrapInStoreProvider } from '../../../../__tests__/functions';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return ({
    __esModule: true,
    useNavigation: () => {
      return ({
        navigate: mockNavigate,
      }) 
    },
  });
});

let wrapper: any;

describe('ExpandableList', () => {
  beforeEach(() => {
    wrapper = mount(
      <ExpandableList
        curriculum={{
          createdby: 'First Creator',
          createdon: '2021-08-03',
          curriculumid: 0,
          lastmodified: 'First Creator',
          lastmodifiedby: '2021-08-03',
          curriculumname: 'Curriculum 1',
          skillidarr: [0, 1, 2],
          skillnamearr: ['JS', 'TS', 'React', 'React-Native'],
        }}
        onPress={() => {
          /** function here??? */
        }}
      />
    );
  });

  // tests if the component is there
  it('Component should appear', () => {
    expect(wrapper).toBeDefined();
  });

  //tests if button navigates to AddEdit Screen
  it('Should navigate after button press', () => {
  });

});
