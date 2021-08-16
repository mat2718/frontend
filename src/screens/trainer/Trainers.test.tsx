import React from 'react';
import { mount, shallow } from 'enzyme';
import MainTrainer from '.';

 const mockNavigate = jest.fn();
 jest.mock('@react-navigation/native' , () => {
   return ({
     ...jest.requireActual('@react-navigation/native'),
     useNavigation: () => {
       return ({
         navigate: mockNavigate,
         // see https://reactnavigation.org/docs/navigation-prop/.
       })
     },
   });
 });


describe('Main Trainer', () => {
  const wrapper = mount(
    <MainTrainer
      trainerfirst='Walter'
      trainerlast='Poken'
      email='walterpoken@rev.net'
      trainerid= {76345654}
    />
  );

  const shallowWrapper = shallow(
    <MainTrainer
      trainerfirst='Forever'
      trainerlast='Young'
      email='fyoung@rev.net'
      trainerid= {7654}
    />
  ); 

  test('Should have all components', () => {
    expect(shallowWrapper.find('FlatList')).toHaveLength(1);
    //const wrap = shallowWrapper.find('FlatList');
  });
});
