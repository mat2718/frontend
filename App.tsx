import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Batches from './src/screens/Batches';
import ViewBatch from './src/screens/ViewBatch';

export default function App() {
  return (
    <ViewBatch
      associate={25}
      batchId={2106}
      curriculum='React Native/Cloud Native'
      trainer='Robert Connell'
      startDate={1622505600000}
      endDate={1627776000000}
    />
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
