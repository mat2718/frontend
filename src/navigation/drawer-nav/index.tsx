import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

/**
 * Drawer Navigation -  routes to Supply/Demand graph and Skills screens
 * @returns {React.FC} - react component for drawer navigation
 * @author Kaiyip Ho
 * the onPress is the navigation 
 */

export const DrawerContent: React.FC = () => {
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={require('../../assets/images/revatureFav.png')}
                size={60}
                style={{ marginTop: 8 }}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>
                  {'Perfect Personnel \nPlacement'}
                </Title>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name='home-outline' color={color} size={size} />
              )}
              label='Home'
              onPress={() => {
                navigation.navigate('Batches');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name='chart-bell-curve' color={color} size={size} />
              )}
              label='Supply vs Demand'
              onPress={() => {
                navigation.navigate('Diagram');
              }}
            />
            <DrawerItem
              labelStyle={styles.label}
              icon={({ color, size }) => (
                <Icon name='book-outline' color={color} size={size} />
              )}
              label='Skills'
              onPress={() => {
                navigation.navigate('Skills');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 18,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  label: {},
});
