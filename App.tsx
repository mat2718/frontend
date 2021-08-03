import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';

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
    return null;
  } else {
    return (
    <SafeAreaProvider style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );}
    
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
