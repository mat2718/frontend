import {DefaultTheme ,Provider as PaperProvider,} from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer} from '@react-navigation/native';
import { DrawerContent } from './DrawerNav';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { RootDrawerParamList} from '../types';
import React from 'react';
import RootTabNavigator from './RootTabNavigator';
import Logo from '../component/logo'

//https://docs.expo.dev/versions/latest/sdk/screens/ -Kai
enableScreens();

const Navigation: React.FC = (props:any) => {

  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <RootDrawerNavigator/>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default Navigation;
const Drawer = createDrawerNavigator<RootDrawerParamList>();


const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerTitle: () => <Logo/>}}
      drawerContent={() => <DrawerContent/> }>
      <Drawer.Screen name="DrawerRoot"
      component={RootTabNavigator}/>
    </Drawer.Navigator>
  )
}

