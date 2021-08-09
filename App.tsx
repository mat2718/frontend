import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/components/Trainer/Searchbar';
import ViewFlatList from './src/components/Trainer/ViewFlatList';
import MainTrainer from './src/Screens/MainTrainer';
import ViewEditTrainer from './src/Screens/ViewEditTrainer';


export default function App() {
  const str = [{name: 'Johnathan Jingles', ID: '87654'}, {name: 'chup', ID: '87774'}]
  const trainer = {FirstName: 'Johnson', LastName: 'Falls', Email: 'jfalls@rev.net', ID: '42987429'};
  return (

    <View style={styles.container}>
      {/* <MainTrainer/> */}
      {/* <SearchBar/> */}
      <ViewEditTrainer/>
    {/* <ViewFlatList trainerArr={str}/> */}
      {/* <CreateTrainer/> */}
      {/* <EditTrainer trainer = {trainer}/> */}
    </View>
  );
}
=======
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './Navigation/RootStackNavigator';

const App = () => {
  const [fontsLoaded, setFonts] = useState(false);

  useEffect(() => {
    loadFonts();
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      FuturaBold: require('./assets/fonts/Futura-Std-Bold.otf'),
      FuturaBook: require('./assets/fonts/Futura-Std-Book.otf'),
      FuturaMedium: require('./assets/fonts/Futura-Std-Medium.otf'),
    });
    setFonts(true);
  };

  if (!fontsLoaded) {
    return (
      <SafeAreaProvider style={styles.container}>
        <Text style={{ fontFamily: 'FuturaBold' }}>The app is loading</Text>
        <StatusBar style='auto' />
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaProvider style={styles.container}>
        <NavigationContainer>
          <PaperProvider theme={DefaultTheme}>
            <StatusBar style='auto' />
            <RootStackNavigator />
          </PaperProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
};

export default App;
>>>>>>> dev-branch

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
