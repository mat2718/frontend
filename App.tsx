import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import Batches from './src/Screens/Batches/Batches'
import ClientScreen from './src/Screens/Clients/ClientScreen';
import AddDemandScreen from './src/components/Clients/AddDemandScreen';
import GlobalStyles from './assets/constants/GlobalStyles';
import EditClient from './src/components/Clients/EditClient';
import AddClient from './src/components/Clients/AddClient';

export default function App() {
  return(
    <View style={GlobalStyles.container}>
   {/*<Batches/>*/}
  <ClientScreen/>
     {/* <AddDemandScreen/> */}
    {/* <AddClient/> */}
    {/* <EditClient/> */}
    </View>
  
  )
};

=======
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import Navigation from './Navigation/index';

const App = () => {
  const [fontsLoaded, setFonts] = useState(false);
  
  useEffect(() => {loadFonts()});

  const loadFonts = async() => {
    await Font.loadAsync({
      FuturaBold: require('./assets/fonts/Futura-Std-Bold.otf'),
      FuturaBook: require('./assets/fonts/Futura-Std-Book.otf'),
      FuturaMedium: require('./assets/fonts/Futura-Std-Medium.otf'),
    });
    setFonts(true);
  }

  if (!fontsLoaded){
    return (
      <SafeAreaProvider style={styles.container}>
        <Text style={{fontFamily:"FuturaBold"}}>The app is loading</Text>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    )
  } else {
    return (
    <SafeAreaProvider style={styles.container}>
      <Navigation/>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );}
    
}
>>>>>>> dev-branch

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


