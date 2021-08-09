import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native'

const SplashScreen2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}></View>
      <View style={styles.imageContainer}>
        <Text>HELLO I AM KAIBA</Text>
      </View>
      <View style={{flex:1}}></View>
    </SafeAreaView>
  )
}

export default SplashScreen2;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imageContainer:{
    flex:1
  }
})