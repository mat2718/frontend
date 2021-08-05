import { shallow } from 'enzyme';
import React from 'react';
import ViewFlatList from './ViewFlatList';

describe('ViewFlatList', () =>
{
    test('should have Flat list', () =>
    {
        const wrapper = shallow(<ViewFlatList trainerArr={['John Doe']} />)
        expect(wrapper.find('FlatList')).toHaveLength(1);
    })
})
