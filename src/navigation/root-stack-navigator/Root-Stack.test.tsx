import { mount } from 'enzyme';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import RootStackNavigator from './';


jest.mock('react-native-reanimated');
jest.mock('react-native-screens', () => {
    return ({
        ...jest.requireActual('react-native-screens'),
        enableScreens: jest.fn(),
    });
});

const testState = {
    skills: [
        {
            skillname: 'skillname',
            skillid: 69,
        },
    ],
    clients: [
        {
            clientname: 'clientname',
            clientid: 69,
        },
    ],
    demands: [
        {
            clientid: 69,
            curriculumid: 69,
            needby: Date.now().toString(),
            quantitydemanded: 69,
            demandId: 69,
        },
    ],
    curricula: [
        {
            createdby: 'Robert',
            createdon: Date.now().toString(),
            lastmodified: Date.now().toString(),
            lastmodifiedby: 'Robert',
            curriculumname: 'curriculumname',
            skillidarr: [
                69, 
                420,
            ],
            skillnamearr: [
                'skillA',
                'skillB',
            ],
            curriculumid: 69,
        },
    ],
    batches: [
        {
            batchsize: 69,
            curriculumid: 420,
            enddate: Date.now().toString(),
            startdate: Date.now().toString(),
            trainerid: 69,
            clientid: 69,
            batchid: 69,
            confirmed: true,
        }
    ],
    onebatch: [
        {
            batchsize: 0,
            curriculumname: '',
            enddate: '',
            startdate: '',
            trainerfirst: '',
            trainerlast: '',
            clientid: 0,
            batchid: 0,
            confirmed: false,
            skillnamearr: [],
          },
    ],
    trainers: [
        'Robert',
    ],
}

const store = configureStore([thunk])(testState)

let wrapper:any;

describe('testing RootStackNavigation', () => {
    
        wrapper = mount(
            <Provider store={store} >
                <NavigationContainer>
                    <PaperProvider>
                        <RootStackNavigator />
                    </PaperProvider>
                </NavigationContainer>
            </Provider>
        );
    

    it('renders the component', () => {
        expect(wrapper).toBeDefined();
    })
})