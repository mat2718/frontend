import React from 'react';
import { mount } from 'enzyme';
import AddCurricula from '.';

describe('AddCurricula', () => {
    const wrapper = mount(<AddCurricula />);
    const shallowWrap = shallow(<AddCurricula />);

    //Test to see if component appears
    it('Component should appear', () => {
        expect(wrapper).toBeDefined();
    });

    //Test to see if labels and input fields appear
    it('Component should have labels and input fields', () => {
        //name, createdon, createdby, skills
        expect(wrapper.find('TextInput')).toHaveLength(4);

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