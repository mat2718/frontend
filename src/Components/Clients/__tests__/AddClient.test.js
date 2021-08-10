import { mount, shallow } from 'enzyme';

import { TextInput, Text } from 'react-native'; 
import AddClient from '../AddClient';
import Header from '../../Header/Header';

let wrapper;
let ID_input, name_input, button;

jest.mock('../../Header/Header', () => {
    return ({
        __esModule: true,
        default: () => {
            return <></>
        }
    })
})

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
        // the above doesn't work with shallow, try below if you want to shallow
        // button = wrapper
        //     .findWhere(node => 
        //         typeof node.prop('onPress') !== 'undefined'
        //     ); 
    })

    
    it('displays Header', () => {
        let header = wrapper.find(Header);
        expect(header.length).toBeGreaterThan(0);
    })

    it('displays textInput whose placeholder reveals to user that it modifies client ID', () => {
        expect(ID_input.length).toBeGreaterThan(0);
    })

    it('displays textInput whose placeholder reveals to user that it modifies client name', () => {
        expect(name_input.length).toBeGreaterThan(0);
    })

    it('displays pressable button for adding client', () => {
        expect(button.length).toBeGreaterThan(0);
    })

    const id = 'id';
    const name = 'name';
    it('TO-DO: test that inputing text in boxes and pressing button has desired side effects', async () => {
        await ID_input.invoke('onChangeText')(id);
        // await ID_input.prop('onChangeText')(id);
        // await ID_input.simulate('change', {nativeEvent: {text: id}})
        // await ID_input.invoke('onChange')( {nativeEvent: {text: id}} );
        // ID_input.simulate('changeText', {target: {value: id}})
        // ID_input.simulate('changeText', id)
        wrapper.update();
        await name_input.invoke('onChangeText')(name);
        // await name_input.prop('onChangeText')(name);
        // await name_input.invoke('onChange')( {nativeEvent: {text: name}} );
        // name_input.simulate('change', {nativeEvent: {text: name}})
        // name_input.simulate('changeText', {target: {value: name}})
        // name_input.simulate('changeText', name)
        wrapper.update();
        await button.invoke('onPress')();
        // button.simulate('press');
        // wrapper.update();
        expect(mockAddNewClient).toHaveBeenCalledWith(id, name);
        // expect(mockAddNewClient).toHaveBeenCalled();
    })
})