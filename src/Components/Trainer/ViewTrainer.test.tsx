import React from 'react';
import ViewTrainer from './ViewTrainer';
import {shallow, mount} from 'enzyme';
/**
 * Authors: Joab Smith and Imran Ilyas
**/
describe('ViewTrainer', () =>
{
    const trainer = {
        FirstName: 'John',
        LastName: 'Doe',
        Email: 'johndoe@hotmail.com',
        ID: '0987654',
    }

    const mock = jest.fn();
    const wrapper = mount(<ViewTrainer trainer={trainer} setEdit={mock} />);
    const shallowWrapper = shallow(<ViewTrainer trainer={trainer} setEdit={mock}/>);

    it('Should have all text fields', () =>
    {
        expect(shallowWrapper.find('Text')).toHaveLength(9);
    })

    it('should have an edit button', () => {
        expect(wrapper.find('TouchableOpacity')).toBeDefined();
    })
    it('should call Edit function when button is pressed', () =>
    {
        const sub = wrapper.find('TouchableOpacity').findWhere((w)=>w.text()==='Edit').first();
        const mockEventHandler = jest.spyOn(sub.props(), 'onPress');
        // Enzyme usually allows wrapper.simulate() alternatively, but this doesn't support 'press' events.
        sub.props().onPress();
        expect(mockEventHandler).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith(true);
    })


})