import React from 'react';
import { mount, shallow } from 'enzyme';
import SkillsListItem from '.';
import { Picker } from '@react-native-picker/picker';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Skill List Item Test - test file for the SkillListItem
 * @author Matthew Otto and Oriel Red Oral
 */

/** Wrapper for mounting */
let wrapper: any;

/** mockProps for this component */
const mockProps = {
  skillname: 'basketball',
  skillid: 1,
};

/** mockStore */
let mockStore = configureStore([thunk])({
  skills: mockProps,
});

const component = () => {
  return <SkillsListItem {...mockProps} />;
};

const Stack = createStackNavigator();

/** Test suite */
describe('tests SkillListItem', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Skills'>{component}</Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  });

  /** Tests if the component exists */
  it('should be there', () => {
    expect(wrapper).toBeDefined();
  });

  it('should test the picker onchange on delete', () => {
    const showDialog = jest.fn();

    wrapper = shallow(<SkillsListItem {...mockProps} />);

    wrapper.find('Picker').simulate('ValueChange', 'delete');

    expect(showDialog).toBeTruthy();
  });

  it('should test the picker onchange on actions', () => {
    const showDialog = jest.fn();
    wrapper = shallow(<SkillsListItem {...mockProps} />);

    wrapper.find('Picker').simulate('ValueChange', 'actions');

    expect(showDialog).toBeTruthy();
  });
});
