import React from 'react';
import {mount, shallow} from 'enzyme'
import CreateTrainer from './CreateTrainer';

describe('Create Trainer', () =>
{
    const wrapper = mount( /*wrapComponent(returnComponent(*/<CreateTrainer />)//)
    const shallowWrapper = shallow( /*wrapComponent(returnComponent(*/<CreateTrainer/>)//)

    it('Should contain all labels and Input fields', () => {
        //firstname, lastname, email, id
        expect(wrapper.find('TextInput')).toHaveLength(4);
        expect(shallowWrapper.findWhere(node => node.text().toLowerCase().includes('id'))).toHaveLength(1)
        expect(shallowWrapper.findWhere(node => node.text().toLowerCase().includes('first'))).toHaveLength(1);
        expect(shallowWrapper.findWhere(node => node.text().toLowerCase().includes('last'))).toHaveLength(1);
        expect(shallowWrapper.findWhere(node => node.text().toLowerCase().includes('email'))).toHaveLength(1);
    })
    
    it('Should have a submit button', () =>
    {
        const submit = shallowWrapper.find('TouchableOpacity');
        expect(submit).toBeDefined();
    })
})