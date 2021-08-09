import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


