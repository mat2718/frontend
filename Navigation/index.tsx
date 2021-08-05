import {DefaultTheme ,Provider as PaperProvider,} from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer} from '@react-navigation/native';
import { DrawerContent } from './DrawerNav';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator,  TransitionPresets} from '@react-navigation/stack';
import { RootDrawerParamList, RootStackParamList} from '../types';
import React from 'react';
import SplashScreen from '../component/screens/splash';

//https://docs.expo.dev/versions/latest/sdk/screens/
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
const Stack = createStackNavigator<RootStackParamList>();

const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent={() => <DrawerContent/> }>
      <Drawer.Screen name="Root"
      component={RootStackNavigator}/>
    </Drawer.Navigator>
  )
}

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