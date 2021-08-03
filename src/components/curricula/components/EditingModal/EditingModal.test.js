import React from 'react';
import { FlatList } from 'react-native';
import { mount } from 'enzyme';
import { wrapComponent } from '../../../../../__tests__/functions';
import EditingModal from './EditingModal';

let wrapper;

const component = () => {
    return <EditingModal />
}

describe('If modal loaded', () => {
    beforeEach( () => {
        wrapper = mount(wrapComponent(component))
    });

    it('renders Flatlist', () => {
        const wrap = wrapper.find(FlatList);
        expect(wrap.length).toBeGreaterThan(0);
    });
})