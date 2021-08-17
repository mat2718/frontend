//==============================================================================
// Mock native modules
//    see https://reactnavigation.org/docs/testing/
// This actually isn't necessary, but it removes an annoying warning that would
//    otherwise show for every test
//==============================================================================
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native-reanimated/lib/reanimated2/NativeReanimated');
jest.mock('react-native-reanimated/lib/reanimated2/WorkletEventHandler');

// import { mount, shallow } from 'enzyme';
// import { Text, TextInput, TouchableOpacity } from 'react-native';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';

// const mockStore = configureStore([thunk]);

// global.shallow = shallow;
// global.mount = mount;
// global.Text = Text;
// global.TextInput = TextInput;
// global.TouchableOpacity = TouchableOpacity;
// global.mockStore = mockStore;
// global.thunk = thunk;
// global.Provider = Provider;
// global.configureStore = configureStore;
