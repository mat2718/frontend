import { RootTabParamList} from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen2 from '../component/screens/test';
import RootStackNavigator from './RootStackNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';
import Curricula from '../src/screens/Curricula/Curricula';

const Tab = createBottomTabNavigator<RootTabParamList>();

//please import your screen and put in your screen in components, SplashScreen2 will is a placeholder! -kai 
const RootTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false}}>
      <Tab.Screen name="Home" component={RootStackNavigator}/>
      <Tab.Screen name="Home2" component={SplashScreen2}/>

      <Tab.Screen 
        name="Batches" 
        component={SplashScreen2}
        options={{
          tabBarIcon:({ color, size }) => (
            <Icon
              name='home-outline'
              color={color}
              size={size}
            />
          )
        }}/>

        <Tab.Screen 
        name="Trainers" 
        component={SplashScreen2}
        options={{
          tabBarIcon:({ color, size }) => (
            <Icon
              name='teach'
              color={color}
              size={size}
            />
          )
        }}/>

        <Tab.Screen 
        name="Curricula" 
        component={Curricula}
        options={{
          tabBarIcon:({ color, size }) => (
            <Icon
              name='book-account-outline'
              color={color}
              size={size}
            />
          )
        }}/>

        <Tab.Screen 
        name="Clients" 
        component={SplashScreen2}
        options={{
          tabBarIcon:({ color, size }) => (
            <Icon
              name='bank'
              color={color}
              size={size}
            />
          )
        }}/>
    </Tab.Navigator>
  )
}

export default RootTabNavigator;