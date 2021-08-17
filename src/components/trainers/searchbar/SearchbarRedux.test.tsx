import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import SearchBar from ".";
import { Reducer } from "../../../redux/reducer";

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
      <Provider store={mockStore}>
       <SearchBar setTrainer={mock} />
      </Provider>);
    
    wrapper.find('TouchableOpacity').findWhere(node=>node === node).first().invoke('onPress')();
    
  })
})