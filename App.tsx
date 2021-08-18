import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';
import RootStackNavigator from './src/navigation/root-stack-navigator';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Reducer } from './src/redux/reducer';
import { Provider } from 'react-redux';
import Toast, { BaseToast } from 'react-native-toast-message';
import { colors } from './src/styles';

export type RootStore = ReturnType<typeof Reducer>;

const App = () => {
  const [fontsLoaded, setFonts] = useState(false);

  /** Toast config */
  const toastConfig = {
    success: ({ text1, ...rest }: any) => (
      <BaseToast
        {...rest}
        style={{ backgroundColor: colors.darkGray }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          color: colors.white,
          fontWeight: 'semibold',
        }}
        text2Style={{
          fontSize: 12,
          color: colors.white,
        }}
      />
    ),
    error: ({ text1, ...rest }: any) => (
      <BaseToast
        {...rest}
        style={{ backgroundColor: colors.darkGray }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          color: colors.white,
          fontWeight: 'semibold',
        }}
        text2Style={{
          fontSize: 12,
          color: colors.white,
        }}
      />
    ),
  };

  useEffect(() => {
    loadFonts();
  });

  const store = createStore(
    Reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  const loadFonts = async () => {
    await Font.loadAsync({
      FuturaBold: require('./src/assets/fonts/Futura-Std-Bold.otf'),
      FuturaBook: require('./src/assets/fonts/Futura-Std-Book.otf'),
      FuturaMedium: require('./src/assets/fonts/Futura-Std-Medium.otf'),
    });
    setFonts(true);
  };

  if (!fontsLoaded) {
    return (
      <SafeAreaProvider style={styles.container}>
        <Text>The app is loading</Text>
        <StatusBar style='auto' />
      </SafeAreaProvider>
    );
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider style={styles.container}>
          <NavigationContainer>
            <PaperProvider theme={DefaultTheme}>
              <StatusBar style='auto' />
              <RootStackNavigator />
              <Toast ref={(ref) => Toast.setRef(ref)} config={toastConfig} />
            </PaperProvider>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
