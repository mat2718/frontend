import { mount } from 'enzyme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper'

import Navigation from './';

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
        
        expect(wrapper).toBeDefined();
    })

    it('???', () => {
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
                
                x({ nativeEvent: { frame: 1}});
            }
        }
    })

})