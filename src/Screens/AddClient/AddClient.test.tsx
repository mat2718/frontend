import React from 'react';
import { mount } from 'enzyme';
import { FlatList, TouchableOpacity } from 'react-native';
import Header from '../../components/batches/header';
import AddClient from '.';

let wrapper: any;

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(<AddClient />);
  });

  //tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  // tests if the header is defined
  it('should display the header', () => {
    const shouldBeHeader = wrapper.find(Header);
    expect(shouldBeHeader).toBeDefined();
    //expect(shouldBeHeader.length).toBeGreaterThan(0); would also work
  });

  // tests the add button
  it('should be pressed', () => {
    const shouldBePressed = wrapper.find(TouchableOpacity).at(0);

    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });
});

// yeet

// TODO Testing captains please review this, we're not sure which AddClient.test.tsx was the most complete.
/*import { mount, shallow } from 'enzyme';

import { TextInput, Text } from 'react-native'; 
import AddClient from '../AddClient';
import Header from '../../Header/Header';

let wrapper;
let ID_input, name_input, button;

// jest.mock('../../Header/Header', () => {
//     return ({
//         __esModule: true,
//         default: () => {
//             return <></>
//         }
//     })
// })

const mockAddNewClient = jest.fn();

describe('testing AddClient', () => {
    
    beforeEach( () => {
        wrapper = mount(<AddClient addNewClient={mockAddNewClient}/>)
        ID_input = wrapper
            .find(TextInput)
            .findWhere( node => 
                node.prop('placeholder').toLowerCase().includes('id') // !! placeholder value is implementation detail
            )
            .last();
        name_input = wrapper
            .find(TextInput)
            .findWhere( node => 
                node.prop('placeholder').toLowerCase().includes('name') // !! placeholder value is implementation detail
            )
            .last();
        button = wrapper
            .find(Text)
            .findWhere( node => 
                   node.text().toLowerCase().includes('add')
                && node.text().toLowerCase().includes('client')
                && ( typeof node.prop('onPress') !== 'undefined' )
            )
            .last();
    })

    
    // it('displays Header', () => {
    //     let header = wrapper.find(Header);
    //     expect(header.length).toBeGreaterThan(0);
    // })

    // it('displays textInput whose placeholder reveals to user that it modifies client ID', () => {
    //     expect(ID_input.length).toBeGreaterThan(0);
    // })

    // it('displays textInput whose placeholder reveals to user that it modifies client name', () => {
    //     expect(name_input.length).toBeGreaterThan(0);
    // })

    // it('displays pressable button for adding client', () => {
    //     expect(button.length).toBeGreaterThan(0);
    // })

    const id = 'id';
    const name = 'name';
    it('pressing button calls listener whose arguments are the values in text boxes', () => {
        ID_input.invoke('onChangeText')(id);
        name_input.invoke('onChangeText')(name);

        // we must find button again or it won't call listener with new state
        // see https://github.com/enzymejs/enzyme/issues/2535
        button = wrapper
            .find(Text)
            .findWhere( node => 
                   node.text().toLowerCase().includes('add')
                && node.text().toLowerCase().includes('client')
                && ( typeof node.prop('onPress') !== 'undefined' )
            )
            .last();

        button.invoke('onPress')();
        expect(mockAddNewClient).toHaveBeenCalledWith(id, name);
    })
}) */
