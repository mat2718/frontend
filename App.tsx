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
      curriculum='React Native'
      trainer='Matthew Otto'
      startDate={1627862400000}
      endDate={1633046400000}
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
