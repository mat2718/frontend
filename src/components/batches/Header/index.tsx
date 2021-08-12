import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { colors } from '../../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header: React.FC = () => {
  return (
    /** Contains the Header for the application */
    <View style={styles.headerView}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name='keyboard-backspace'
          size={24}
          color={colors.darkGray}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    height: StatusBar.currentHeight,
    padding: 20,
    backgroundColor: colors.white,
    shadowColor: 'rgb(0,0,0)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    paddingTop: 65,
    paddingBottom: 35,
  },

  revatureLogo: {
    height: 30,
  },
});

export default Header;
