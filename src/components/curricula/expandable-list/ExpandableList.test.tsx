import React from 'react';
import { mount } from 'enzyme';
import { ExpandableList } from '.';
import { TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { wrapInStoreProvider } from '../../../../__tests__/functions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const testState = {};
const createMockStore = configureStore([thunk]);

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

const mockOnPress = jest.fn();

const props = {
  onPress: mockOnPress,
  curriculum: {
    createdon: Date.now().toString(),
    createdby: 'Robert',
    skillnamearr: [
      'yeet',
      'skeet',
    ],
    skillidarr: [
      69,
      420,
    ],
    curriculumname: 'React Native',
    curriculumid: 6942069,
    lastmodifiedby: 'Robert',
    lastmodified: Date.now().toString(),
  }
}

describe('ExpandableList', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={createMockStore(testState)}>
        <ExpandableList {...props} />
      </Provider>
      
    );
  });

  // tests if the component is there
  it('should be there', () => {
    expect(wrapper).toBeDefined();
  });

  //tests if button navigates to AddEdit Screen
  it('Should navigate after button press', () => {
    /* no-op*/
  });

  it('can expand and de-expand the list', () => {
    //==========================================================================
    // expand list
    //==========================================================================
    let pressable = wrapper
      .find(TouchableOpacity)
      .findWhere( (node:any) => 
        node.props().hasOwnProperty('onPress')
      )
    pressable = pressable.length ? pressable.last() : pressable; // probably unnecessary but it's a good safeguard
    pressable.invoke('onPress')();

    // could put an expect for text node that includes curriculum.curriculumname
    
    //==========================================================================
    // de-expand list
    //==========================================================================
    // we have to find node again because previous node was found when expanded === false
    pressable = wrapper
      .find(TouchableOpacity)
      .findWhere( (node:any) => 
        node.props().hasOwnProperty('onPress')
      )
    pressable = pressable.length ? pressable.last() : pressable; // probably unnecessary but it's a good safeguard
    pressable.invoke('onPress')();
  })

});
