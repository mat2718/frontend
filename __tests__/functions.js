import { testState } from './constants.js';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Wraps a component in the necessary wrappers to account for Redux, React 
 * Navigation, etc.
 * 
 * @param {*} component - a function that returns JSX
 * @param {*} state - (OPTIONAL) an object representing the initial value of the mocked state store  
 * @param {*} realStore - (OPTIONAL) if you don't want to mock the redux state store, then give the real store
 * @param {*} screenName - (OPTIONAL) the name of Stack.Screen
 * @param {*} screenName2 - (OPTIONAL) the name of nearby Stack.Screen you can navigate to (mock navigate.navigate())
 * @returns `component` wrapped in the necessary components
 */
 export const wrapComponent = ( 
    component, 
    state = testState,
    realStore = undefined,
    screenName = 'home', 
    screenName2 = 'testScreen2',
) => {
    const mockStore = configureStore([thunk]);
    const store  = realStore ? realStore : mockStore(state);
    const Stack = createStackNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={screenName}>
                        {component}
                    </Stack.Screen>
                    <Stack.Screen name={screenName2}>
                        { () => {
                            return (
                                <>
                                    <Text>{screenName2}</Text>
                                </>
                            );
                        }}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
};

/**
 * Wrap component in a store provider with either a mocked store or your actual store.
 * 
 * @param {*} Component - component to wrap in store provider
 * @param {*} state - (OPTIONAL) an object representing the initial value of the mocked state store  
 * @param {*} realStore - (OPTIONAL) if you don't want to mock the redux state store, then give the real store
 * @returns 
 */
 export const wrapInStoreProvider = (Component, initialState = testState, realStore = undefined) => {
    const mockStore = configureStore([thunk]);
    const store  = realStore ? realStore : mockStore(initialState);
    return (
        <Provider store={store}>
            <Component/>
        </Provider>
    )
}

/**
 * Takes an object representing the props to pass in a component, and it adds
 * a mock navigation prop to simulate being wrapped in Stack.Screen components.
 * 
 * @param props - object representing props you will pass to some component
 * @returns - new object with all properties of props_, plus a navigation key
 */
 export const createTestProps = (props) => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
});
