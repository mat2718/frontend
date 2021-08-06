import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';

const Header: React.FC = () => {
  return (
    /** Contains the Header for the application */
    <View style={styles.headerView}>
      <Image
        source={{
          uri: 'https://www.investcorp.com/wp-content/uploads/2020/05/Revature.png',
        }}
        resizeMode='contain'
        style={styles.revatureLogo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    height: StatusBar.currentHeight,
    padding: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 30,
  },

  revatureLogo: {
    height: 30,
  },
});

export default Header;
