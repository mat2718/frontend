import React from 'react';
import { mount, shallow } from 'enzyme';
import MainTrainer from '.';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Reducer } from '../../redux/reducer';
import {Provider as PaperProvider} from 'react-native-paper'

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

jest.mock('react-redux', () =>
{
  return ({
    ...jest.requireActual('react-redux'),
    useSelector: () =>
      [{
        trainerfirst: 'Walter',
        trainerlast: 'Poken',
        email: 'walterpoken@rev.net',
        trainerid: 76345654,
      }],
  });
 });
describe('Main Trainer', () => {
  const mockStore = createStore(
    Reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  const wrapper = mount(
    <Provider store={mockStore}>
      <PaperProvider>
        <MainTrainer />
      </PaperProvider>
      </Provider>
    );
    
    
  const shallowWrapper = shallow(
    <MainTrainer
    />
    ); 
    // trainerfirst='Forever'
    // trainerlast='Young'
    // email='fyoung@rev.net'
    // trainerid= {7654}

  test('Should have all components', () => {
    expect(shallowWrapper.find('FlatList')).toHaveLength(1);
    //const wrap = shallowWrapper.find('FlatList');
  });
});
