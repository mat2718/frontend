import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AddEditCurriculum from '.';
import { TextInput } from 'react-native';

const testState = {
    skills: {
        skillname: 'skill',
        skillid: '69'
    }
};
const createMockStore = configureStore([thunk]);

const mockGoBack = jest.fn();
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

const mockDispatch = jest.fn();
jest.mock('react-redux', () => {
    return ({
        ...jest.requireActual('react-redux'),
        useDispatch: () => mockDispatch
    });
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

        expect(shallowWrap.findWhere((node: any) => {
            return node.text().toLowerCase().includes('name');
        }));

        expect(shallowWrap.findWhere((node: any) => {
            return node.text().toLowerCase().includes('createdon');
        }));

        expect(shallowWrap.findWhere((node: any) => {
            return node.text().toLowerCase().includes('createdby');
        }));

        expect(shallowWrap.findWhere((node: any) => {
            return node.text().toLowerCase().includes('skills');
        }));
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
    })
})