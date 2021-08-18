import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AddEditCurriculum from '.';
import { TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

let wrapper: any;
let useEffect: any;

const testState = {
    skills: {
        skillname: 'skill',
        skillid: '69'
    }
};
const createMockStore = configureStore([thunk]);

const mockGoBack = jest.fn();
const mockDispatch = jest.fn();
jest.mock('react-native-toast-message');
jest.mock('@react-navigation/native', () => {
    return ({
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => {
            return({
                goBack: mockGoBack,
            })
        }
    })
})

jest.mock('react-redux', () => {
    return ({
        ...jest.requireActual('react-redux'),
        useDispatch: () => mockDispatch
    });
});

jest.mock('react-native-toast-message', () => {
    return({
        __esModule: true,
        ...jest.requireActual('react-native-toast-message'),
        default: {
            show: jest.fn()
        }
    })
});

describe('AddEditCurriculum', () => {
    const wrapper = mount(
        <Provider store={createMockStore(testState)}>
            <AddEditCurriculum />
        </Provider>
    );
    const shallowWrap = shallow(
        <Provider store={createMockStore(testState)}>
            <AddEditCurriculum />
        </Provider>
    );

    //Test to see if component appears
    it('Component should appear', () => {
        expect(wrapper).toBeDefined();
    });

    //Test to see if labels and input fields appear
    it('Component should have labels and input fields', () => {
        //name, createdon, createdby, skills
        expect(wrapper.find('TextInput').length).toBeGreaterThan(0);

        expect(wrapper.find({testID: 'Name'}).length).toBeGreaterThan(1);

    });

    //Test to see if states update on text input
    it('Component should update states with text input', () => {
        wrapper.find(TextInput)
        .findWhere((node: any) => {
            return node.props().hasOwnProperty('onChangeText')
        })
        .forEach((node: any) => {
            node.invoke('onChangeText')('hello');
        })
    });

    //Tests calendar picker
    it('Component should have a calendar picker', () => {
        let button = wrapper.find({testID: 'dateBtn'})
            .findWhere((node: any) => node.props().hasOwnProperty('onPress'))
            .last();
        button.invoke('onPress')();

        wrapper
        .find({ testID: 'dateTest' })
        .findWhere((node: any) => {
          return node.props().hasOwnProperty('onChange');
        })
        .forEach((node: any) => {
          node.invoke('onChange')(null, new Date(new Date(Date.now())));
          node.invoke('onChange')(null, false);
        });
    })
});
//added tests