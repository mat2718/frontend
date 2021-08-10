import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RootStackParamList, RootTabParamList, RootDrawerParamList } from '../types';
import React from 'react';
import ClientScreen from '../src/Screens/Clients/ClientScreen';
import EditClient from '../src/components/Clients/EditClient';
import AddClient from '../src/components/Clients/AddClient';
import AddDemandScreen from '../src/components/Clients/AddDemandScreen';
import EditDemandScreen from '../src/components/Clients/EditDemandScreen';
import ViewBatch from '../src/Screens/ViewBatch/index'
import Navigation from './index';
import AddEditBatch from '../src/Screens/AddEditBatch';

//please import your screen and put in your screen in components-kai
const Stack = createStackNavigator<RootStackParamList>();
const RootStackNavigator = () => {
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}>
    <Stack.Screen name='Main' component={Navigation} />
    <Stack.Screen name='ViewBatch' component={ViewBatch} />
    <Stack.Screen name='AddEditBatch' component={AddEditBatch} />
      {/** add your view/addedit screens here */}
        
    <Stack.Screen name="Clients" component={ClientScreen}/>
    <Stack.Screen name="EditClient" component={EditClient}/>
    <Stack.Screen name="AddClient" component={AddClient}/>
    <Stack.Screen name="AddDemand" component={AddDemandScreen}/>    
    <Stack.Screen name="EditDemand" component={EditDemandScreen}/>
      
  </Stack.Navigator>
  
};

export default RootStackNavigator;
