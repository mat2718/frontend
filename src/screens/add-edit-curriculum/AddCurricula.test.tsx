import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AddEditCurriculum from '.';

const testState = {
    skills: {
        skillname: 'skill',
        skillid: '69'
    }
};
const createMockStore = configureStore([thunk]);

const mockDispatch = jest.fn();
jest.mock('react-redux', () => {
    return ({
        ...jest.requireActual('react-redux'),
        useDispatch: () => mockDispatch
    });
});

describe('AddCurricula', () => {
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
            node.text().toLowerCase().includes('name');
        }));

        expect(shallowWrap.findWhere((node: any) => {
            node.text().toLowerCase().includes('createdon');
        }));

        expect(shallowWrap.findWhere((node: any) => {
            node.text().toLowerCase().includes('createdby');
        }));

        expect(shallowWrap.findWhere((node: any) => {
            node.text().toLowerCase().includes('skills');
        }));
    });

    //Test to see if states update on text input
    it('Component should update states with text input', () => {
        const input = wrapper.findWhere((node: any) => {
            node.prop('')
        })
    })
})