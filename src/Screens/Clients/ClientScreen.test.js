import {mount} from 'enzyme';
import { ExampleComponent } from '../../../__tests__/constants';
import ClientScreen from './ClientScreen';
// import RNPickerSelect from 'react-native-picker-select';
import * as React from 'react';

// jest.mock('react-native-picker-select');

import ClientList from './ClientList';
// jest.mock('./ClientList', () => {
//     return ({
//         __esModule: true,
//         default: () => {
//             return <></>
//         }
//     })
// })

jest.mock('@react-native-picker/picker')

let wrapper;
describe('testing client screen',()=>{

    beforeEach(()=>{
        wrapper=mount(<ClientScreen/>)
    })

    it('should render correctly on screen',()=>{
        expect(wrapper).toBeDefined();
    })

    it('', () => {
        const mockSetClient = jest.fn();
        jest.spyOn(React, 'useState').mockImplementationOnce( (arg) => {
            return [arg, mockSetClient];
        });
        // const dropDownMenu = wrapper.find(RNPickerSelect);
        // console.log(wrapper.debug());
        let dropDownMenu = wrapper.find( {testID: 'picker'} );
        console.log(dropDownMenu.length)
        if (dropDownMenu.length > 1) {
            dropDownMenu = dropDownMenu.last();
        }
        dropDownMenu.props().onValueChange();
        console.log('number of calls: ', mockSetClient.mock.calls);
        wrapper.update();
        expect(1).toBe(1);
    })
})


