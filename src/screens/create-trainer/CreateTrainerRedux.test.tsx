import axios from "../../../axiosConfig";
import MockAdapter from "axios-mock-adapter";
import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import CreateTrainer from ".";
import ITrainer from "../../entities/Trainer";
import { Reducer } from "../../redux/reducer";

jest.mock("../../../axiosConfig");
jest.mock('react-native-toast-message', () =>
 ({
    __esModule: true,
    default:{
      
      show: jest.fn()
    }
  })
)
describe('Create Trainer Redux', () =>
{
    const mockStore = createStore(
        Reducer,
        composeWithDevTools(applyMiddleware(thunk))
      );
      const wrapper = mount(
        <Provider store={mockStore}>
          <CreateTrainer />
        </Provider>);
    it('should update the database and redux', () =>
    {
        const newTrainer: ITrainer = {
            trainerfirst: "John",
            trainerlast: "Smith",
            email: "J.smith@mail.com",
            trainerid: 0,
        };
        axios.get.mockResolvedValue({ data: [newTrainer] });
        wrapper
      .findWhere((node) => node.prop('placeholder') === 'First Name')
            .last().invoke('onChangeText')('John');
        wrapper
            .findWhere((node) => node.prop('placeholder') === 'Last Name')
            .last().invoke('onChangeText')('Smith');
        
        wrapper
            .findWhere((node) => node.prop('placeholder') === 'Email')
            .last().invoke('onChangeText')('J.smith@mail.com');
        
        const sub = wrapper
        .find('TouchableOpacity')
        .findWhere((w) => w.text() === 'Submit')
        .first().invoke('onPress')();
        //wrapper.update();
        //expect(mockStore.getState().trainers).toContain(newTrainer)
        
    })
})