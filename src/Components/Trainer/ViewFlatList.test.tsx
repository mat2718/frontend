import { mount, shallow } from 'enzyme';
import React from 'react';
import ViewFlatList from './ViewFlatList';

describe('ViewFlatList', () =>
{
    test('should have Flat list', () =>
    {
        const wrapper = shallow(<ViewFlatList trainerArr={['John Doe']} />)
        expect(wrapper.find('FlatList')).toHaveLength(1);
    })

    test('item should be clickable', () => {
        const wrapper = shallow(<ViewFlatList trainerArr={['John Doe']} />)
        expect(wrapper.find('TouchableOpacity')).toBeDefined();
        //check if function is triggered onPress
        const MountedWrapper = mount(<ViewFlatList trainerArr={['John Doe']} />)
        const trainer = MountedWrapper.find('TouchableOpacity').findWhere((w)=>w.text().includes('John Doe')).first();
        const spy = jest.spyOn(trainer.props(), 'onPress');
        trainer.props().onPress();
        expect(spy).toHaveBeenCalled();
    })
    test('item should contain passed text', () =>
    {
        
        const wrapper = shallow(<ViewFlatList trainerArr={['John Doe', 'Joeseph Rudgert']} />)
        const nodeA = wrapper.findWhere(node => node.text().includes('John Doe'));
        const nodeB = wrapper.findWhere(node => node.text().includes('Joeseph Rudgert'));
        
        expect(nodeA).toBeDefined();
        expect(nodeB).toBeDefined();
    })
})
