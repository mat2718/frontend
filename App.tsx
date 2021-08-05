import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewFlatList from './src/components/Trainer/ViewFlatList';
import CreateTrainer from './src/Screens/CreateTrainer';

export default function App() {
  const str = [{name: 'Johnathan Jingles', ID: '87654'}, {name: 'chup', ID: '87774'}]
  return (
    <View style={styles.container}>
      <ViewFlatList trainerArr={str}/>
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
