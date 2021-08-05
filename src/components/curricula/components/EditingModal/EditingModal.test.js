import React from 'react';
import { FlatList } from 'react-native';
import { mount } from 'enzyme';
import EditingModal, { DATA } from './EditingModal';

describe('If modal loaded', () => {
    let wrapper;

    const component = () => {
        return <EditingModal />
    }

    beforeEach( () => {
        wrapper = mount(<EditingModal />)
    });

    //component renders
    it('Component renders', () => {
        expect(wrapper).toBeDefined();
    });

    //tests flatlist to be defined
    it('Should display the flatlist', () => {
        const flatListDisplay = wrapper.find(FlatList);
        expect(flatListDisplay).toBeDefined();
    });

    //tests if flatlist renders data
    it('Flatlist should have data', () => {
        const flatListDisplay = wrapper.find(FlatList).props().DATA;
        expect(flatListDisplay).toEqual(DATA);
    })
})