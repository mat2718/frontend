import {DefaultTheme ,Provider as PaperProvider,} from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer} from '@react-navigation/native';
import { DrawerContent } from './DrawerNav';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator,  TransitionPresets} from '@react-navigation/stack';
import { RootDrawerParamList, RootStackParamList, RootTabParamList} from '../types';
import React from 'react';
import SplashScreen from '../component/screens/splash';
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

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false}}>
      <Tab.Screen name="TabRoot" component={RootStackNavigator}/>
    </Tab.Navigator>
  )
}


//add your screens to this RootStackNavigator- Kai
const Stack = createStackNavigator<RootStackParamList>();
const RootStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}>
      <Stack.Screen name="Splash"
        component={SplashScreen}/>
    </Stack.Navigator>
  )
}