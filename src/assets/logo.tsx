import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

/**
 * Loading Screen - Renders Revature Logo while waiting for Expo to load the application
 * @returns {React.FC} - react component that displays the Revature Logo
 * @author Kaiyip Ho
 */

const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        style={styles.logo}
        source={require('../assets/images/RevatureLogo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: 35,
    marginBottom: 15,
  },
});

export default Logo;
