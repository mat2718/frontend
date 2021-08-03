import React from 'react';
import {mount} from 'enzyme'
import CreateTrainer from './CreateTrainer';

describe('Create Trainer', () =>
{
    const wrapper = mount( /*wrapComponent(returnComponent(*/<CreateTrainer/>)//)

    it('Should contain all labels and Input fields', () => {
        //firstname, lastname, email, id
        expect(wrapper.find('TextInput')).toHaveLength(4);
        expect(wrapper.findWhere(node =>
            ['firstname', 'lastname', 'email', 'id'].includes(
            node.text().toLowerCase()))).toBe(4)
    })
    
    it('Should have a submit button', () =>
    {
        const submit = wrapper.find('TouchableOpacity');
        expect(submit).toBeDefined();
    })
})