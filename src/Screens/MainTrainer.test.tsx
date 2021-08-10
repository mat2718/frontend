import React from 'react';
import { mount, shallow } from 'enzyme';
import MainTrainer from './MainTrainer';
/**
 * Authors: Joab Smith and Imran Ilyas
**/
describe('Main Trainer', () =>
{
    const wrapper = mount( /*wrapComponent(returnComponent(*/<MainTrainer />)//)
    const shallowWrapper = shallow( /*wrapComponent(returnComponent(*/<MainTrainer/>)//)

    test('Should have all components', () =>
    {
        
        expect(shallowWrapper.find('ViewFlatList')).toHaveLength(1);
        expect(shallowWrapper.find('SearchBar')).toHaveLength(1);
        //Find add trainer button
        const add = wrapper.find('TouchableOpacity').findWhere((w) => w.text() === 'Add Trainer').first();
        expect(add).toHaveLength(1);
    })
})