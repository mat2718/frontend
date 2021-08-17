import React from 'react';
import { SafeAreaView, StyleSheet, Image, View } from 'react-native';

/**
 * Loading Splash Screen - a splash screen
 * @returns {React.FC} - displays the Revature logo during the loading of the application
 * @author Kaiyip Ho
 */

const SplashScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/RevatureLogo.png')} />
      </View>
      <View style={{ flex: 1 }}></View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1,
  },
});
