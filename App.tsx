import { StatusBar } from 'expo-status-bar';
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

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
