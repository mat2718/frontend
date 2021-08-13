import React from 'react';
import { mount, shallow } from 'enzyme';
import MainTrainer from '.';
/**
 * Authors: Joab Smith and Imran Ilyas
 **/

 const mockNavigate = jest.fn();
 jest.mock('@react-navigation/native' , () => {
   return ({
     ...jest.requireActual('@react-navigation/native'),
     useNavigation: () => {
       return ({
         navigate: mockNavigate,
         // goBack: mockGoBack,
         // setParams: mockSetParams,
         // etc, see https://reactnavigation.org/docs/navigation-prop/. DON'T MOCK ALL OF THESE, just mock the ones you use
       })
     },
   });
 });


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
