import { enableScreens } from 'react-native-screens';
import { DrawerContent } from './drawer-nav';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../types';
import React from 'react';
import RootTabNavigator from './root-tab-navigator';
import Logo from '../assets/logo';

/**
 * Drawer Navigation - displays a screen hidden on the left side that routes to specific components
 * @return {React.FC} - React component for navigation in the form of a drawer
 * @author Kaiyip Ho
 * //https://docs.expo.dev/versions/latest/sdk/screens/ 
 */

enableScreens();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const Navigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: () => <Logo />,
      }}
      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen name='DrawerRoot' component={RootTabNavigator} />
    </Drawer.Navigator>
  );
};

export default Navigation;
