import React,{useState} from 'react';
import {mount, shallow} from 'enzyme'
import CreateTrainer from './CreateTrainer';


describe('Create Trainer', () =>
{
    const wrapper = mount( /*wrapComponent(returnComponent(*/<CreateTrainer />)//)
    const shallowWrapper = shallow( /*wrapComponent(returnComponent(*/<CreateTrainer/>)//)

    it('Should contain all labels and Input fields', () =>
    {
        //firstname, lastname, email, id
        expect(wrapper.find('TextInput')).toHaveLength(4);
        expect(shallowWrapper.findWhere(node => node.text().toLowerCase().includes('id'))).toHaveLength(1)
        expect(shallowWrapper.findWhere(node => node.text().toLowerCase().includes('first'))).toHaveLength(1);
        expect(shallowWrapper.findWhere(node => node.text().toLowerCase().includes('last'))).toHaveLength(1);
        expect(shallowWrapper.findWhere(node => node.text().toLowerCase().includes('email'))).toHaveLength(1);
    });
    
    it('Should have a submit button', () =>
    {
        const submit = shallowWrapper.find('TouchableOpacity');
        expect(submit).toBeDefined();
    });

    it('Should update states on text input', () =>
    {
        const inputFN = wrapper.findWhere(node => node.prop('placeholder') === 'First Name').last();
        const mockEventHandler = jest.fn();
        Object.defineProperty(  inputFN.props(), 'onChangeText', {
            value: mockEventHandler,
            writable: true,
        });

        //const inputLN = shallowWrapper.findWhere(node => node.prop('placeholder') === 'Last Name');
        //const LNinput_Mock = jest.spyOn(inputLN.props(), 'onChangeText');

        //const inputEmail = shallowWrapper.findWhere(node => node.prop('placeholder') === 'Email');
        //const Emailinput_Mock = jest.spyOn(inputEmail.props(), 'onChangeText');

        //const inputID = shallowWrapper.findWhere(node => node.prop('placeholder') === 'ID Number');
        //const IDinput_Mock = jest.spyOn(inputID.props(), 'onChangeText');

        //inputFN.simulate('ChangeText', 'John');
        //const spy = jest.spyOn(inputFN.props(), 'onChangeText');
        inputFN.simulate('change', { target: { value: 'John' } })
        
        wrapper.update();
        console.log(inputFN.text());
        //expect(1).toBe(1);
        expect(mockEventHandler).toHaveBeenCalledWith('John');

        expect(inputFN.text()).toEqual('John');
        
        // inputLN.simulate('ChangeText', 'Deere');
        // shallowWrapper.update();
        // expect(inputFN.text()).toEqual('Deere');

        // inputEmail.simulate('ChangeText', 'anemail@yahoo.com');
        // shallowWrapper.update();
        // expect(inputFN.text()).toEqual('anemail@yahoo.com');

        // inputID.simulate('ChangeText', '26543');
        // shallowWrapper.update();
        // expect(inputFN.text()).toEqual('26543');
    });
})