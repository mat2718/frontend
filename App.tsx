import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewFlatList from './src/Components/Trainer/ViewFlatList';
import CreateTrainer from './src/Screens/CreateTrainer';
import Header from './src/Components/Header';
import EditTrainer from './src/Components/Trainer/EditTrainer';
import SearchBar from './src/Components/Trainer/Searchbar';

export default function App() {
  const str = [{name: 'Johnathan Jingles', ID: '87654'}, {name: 'chup', ID: '87774'}]
  const trainer = {FirstName: 'Johnson', LastName: 'Falls', Email: 'jfalls@rev.net', ID: '42987429'};
  return (

    <View style={styles.container}>
    <ViewFlatList trainerArr={str}/>
      {/* <CreateTrainer/> */}
      {/* <EditTrainer trainer = {trainer}/> */}
      {/* <SearchBar/> */}
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
