import { mount, shallow } from 'enzyme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DrawerItem } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper'

import Navigation from './';
import { wrapInStoreProvider } from '../../__tests__/functions';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
    return ({
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => {
            return ({
                navigate: mockNavigate,
            });
        },
    });
})

jest.mock('react-native-screens', () => {
    return ({
        ...jest.requireActual('react-native-screens'),
        enableScreens: jest.fn(),
    });
});


let wrapper:any;

describe('testing DrawerContent', () => {
    beforeEach( () => {
        wrapper = mount(
            <PaperProvider>
                <SafeAreaProvider>
                    <Navigation />
                </SafeAreaProvider>
            </PaperProvider>
        );
    })

    it('renders the component', () => {
        console.log(wrapper.debug());
        expect(wrapper).toBeDefined();
    })

    it('???', () => {
        console.log(wrapper.children().length)
        const props = wrapper
            .children()
            .children()
            .children()
            .children()
            .children()
            .children()
            .children()
            .props()
        for (let x of Object.values(props)) {
            if (typeof x === 'function') {
                console.log(x);
                x({ nativeEvent: { frame: 1}});
            }
        }
    })

})