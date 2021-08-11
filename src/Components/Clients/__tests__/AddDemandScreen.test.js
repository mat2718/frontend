import { mount } from 'enzyme';
import { Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import CalendarPicker from 'react-native-calendar-picker';
import CurriculumList from '../CurriculumList';
import Header from '../../Header'


import AddDemandScreen from './AddDemandScreen';

let wrapper;

const props = {
    route: {
        params: [
            'Clients'
        ]
    }
}

describe('testing AddDemandScreen', () => {
    
    beforeEach( () => {
        wrapper = mount( <AddDemandScreen {...props}/> )
    })

    it('renders Header', () => {
        expect( wrapper.find(Header).length ).toBeGreaterThan(0);
    })

    it('renders a calendar picker', () => {
        expect( wrapper.find(CalendarPicker).length ).toBeGreaterThan(0);
    })

    it('renders CurriculumList', () => {
        expect( wrapper.find(CurriculumList).length ).toBeGreaterThan(0);
    })

    // WARNING: Implementation detail
    it('CurriculumList has setter for currCurriculum in its props', () => {
        const curriculum = 'curriculum';
        Object.values( wrapper.find(CurriculumList).props() ).forEach( x => {
            if (typeof x === 'function') {
                x(curriculum);
            }
        });
        let isNewCurriculumShown = wrapper.find(Text).someWhere( node =>
            node.text().toLowerCase().includes(curriculum)     
        );
        expect(isNewCurriculumShown).toBeTruthy();
    })

    // really good version of previous test, integration test
    // it('by interacting with Curriculum list, we can change displayed Curriculum', () => {

    // })

    it('renders pressable button to add demand', () => {
        expect(
            wrapper
            .find(Text)
            .findWhere(node => 
                   node.text().toLowerCase().includes('add')
                && node.text().toLowerCase().includes('demand')
                && ( typeof node.prop('onPress') !== undefined )
            )
            .length
        )
        .toBeGreaterThan(0);
    })

    it('add demand button performs correct behavior when pressed', () => {
        expect(1).toBe(0); // not yet implemented
    })

    it('when we make a choice in Calendar picker, the text box displays the new demanded date', () => {
        let calendar = wrapper.find(CalendarPicker);
        let date = Date.now();
        calendar.invoke('onDateChange')(date);
        let isNewDateShown = wrapper.find(Text).someWhere( node =>
            node.text().toLowerCase().includes(moment(demandDate).format('MM-DD-YYYY'))     
        )
        expect(isNewDateShown).toBeTruthy();
    })

    it('when we type something in the text input box, we see a different number of associates needed', () => {
        let input = wrapper.find(TextInput);
        if ( input.lenghth > 1 ) {
            input = input.last();
        }
        const number = '123';
        input.invoke('onChangeText')(number);
        let isNewNumberShown = wrapper.find(Text).someWhere( node =>
            node.text().toLowerCase().includes(number)     
        )
        expect(isNewNumberShown).toBeTruthy();
    })

    it('the curriculum is shown as text', () => {
        expect(
            wrapper
            .find(Text)
            .findWhere(node => 
                node.text().toLowerCase().includes(props.route.params[0].toLowerCase())
            )
            .length
        )
        .toBeGreaterThan(0);
    })
})