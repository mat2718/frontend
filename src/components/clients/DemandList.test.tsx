import { mount } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import DemandList from './DemandList';

let wrapper;

describe('testing DemandList', () => {
    beforeEach( () => {
        wrapper = mount(<DemandList />);
    })

    it('renders the component', () => {
        expect(wrapper.length).toBeGreaterThan(0);
    })

    it('shows revaturejr clients', () => {
        wrapper = mount(<DemandList currClient='revaturejr' />);
        expect(wrapper.length).toBeGreaterThan(0);
    })

    it('no runtime errors when pressing button', () => {
        wrapper = mount(<DemandList currClient='revaturejr' />);
        let pressable = wrapper
            .find(TouchableOpacity)
            .findWhere( (node:any) => 
                node.props().hasOwnProperty('onPress')
            );
        pressable.forEach( (node:any) => {
            node.invoke('onPress')();
        })
    })
})