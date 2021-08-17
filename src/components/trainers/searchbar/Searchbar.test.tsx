import React from 'react';
import axios from 'axios';
import { shallow, mount } from 'enzyme';
import SearchBar from '.';
import { wrapInStoreProvider } from '../../../../__tests__/functions';
import { Provider, useDispatch } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Reducer } from '../../../redux/reducer';

jest.mock('react-redux');
jest.mock('axios');
describe('Search Bar', () =>
{
  it('Should contain all components', () => {
    const mock = jest.fn();
    useDispatch.mockReturnValue();
    const wrapper = shallow(<SearchBar setTrainer={mock} />);
    const search = wrapper.findWhere(
      (node) => node.prop('placeholder') === 'Search Trainers'
    );
    expect(search).toHaveLength(1);

    const picker = wrapper.find('Picker');
    expect(picker).toHaveLength(1);
  });

  
});
