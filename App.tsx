import { StatusBar } from 'expo-status-bar';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
