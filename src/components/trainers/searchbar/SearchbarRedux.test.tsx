import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import SearchBar from ".";
import { Reducer } from "../../../redux/reducer";
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';


jest.requireActual('react-redux');

describe('Search Bar button', () =>
{
  it('should update the state on press', () =>
  {
    const mockStore = createStore(
      Reducer,
      composeWithDevTools(applyMiddleware(thunk))
    );
    const mock = jest.fn();
    const wrapper = mount(
      <PaperProvider>
        <Provider store={mockStore}>
          <SearchBar setTrainer={mock} />
        </Provider>
      </PaperProvider>
    );
      
    
    wrapper.find('TouchableOpacity').findWhere(node=>node === node).first().invoke('onPress')();
    
  })

  const arr = ['ALL', 'Fname', 'Lname', 'default']
  it.each(arr)('no runtime errors when you pick %s', (str) => {
    const mockStore = createStore(
      Reducer,
      composeWithDevTools(applyMiddleware(thunk))
    );
    const mock = jest.fn();
    const wrapper = mount(
      <Provider store={mockStore}>
       <SearchBar setTrainer={mock} />
      </Provider>);
    let picker = wrapper
      .find(Picker)
      .findWhere( (node:any) => 
        node.props().hasOwnProperty('onValueChange')
      )
    picker.forEach( (node:any) => {
      node.invoke('onValueChange')(str);
      let pressable = wrapper
        .find(TouchableOpacity)
        .findWhere( (node_:any) => 
          node_.props().hasOwnProperty('onPress')
        );
      pressable.forEach( (node__:any) => {
        node__.invoke('onPress')();
      }) 
    });
  })
})