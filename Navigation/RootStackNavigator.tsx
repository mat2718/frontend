import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RootStackParamList, RootTabParamList, RootDrawerParamList } from '../types';
import React from 'react';
import ViewBatch from '../src/screens/ViewBatch';
import Navigation from '.';
import RootTabNavigator from './RootTabNavigator';
import AddEditBatch from '../src/screens/AddEditBatch';
import Curricula from '../src/screens/Curricula/Curricula';
import AddEditCurriculum from '../src/screens/AddEditCurriculum/AddEditCurriculum';


import CreateTrainer from '../src/screens/CreateTrainer';
import ViewEditTrainer from '../src/screens/ViewEditTrainer';
//see what happens
//please import your screen and put in your screen in components-kai
const Stack = createStackNavigator<RootStackParamList>();


const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name='Main' component={Navigation} />
      <Stack.Screen name='ViewBatch' component={ViewBatch} />
      <Stack.Screen name='AddEditBatch' component={AddEditBatch} />
      <Stack.Screen name='AddTrainer' component={CreateTrainer} options={{ headerShown: true }}/>
      <Stack.Screen name='ViewEditTrainer' component={ViewEditTrainer} options={{ headerShown: true }}/>
      {/** add your view/addedit screens here */}
      <Stack.Screen name='Curricula' component={Curricula} />
      <Stack.Screen name='AddEditCurriculum' component={AddEditCurriculum} />       
      <Stack.Screen name="Clients" component={ClientScreen}/>
      <Stack.Screen name="EditClient" component={EditClient}/>
      <Stack.Screen name="AddClient" component={AddClient}/>
      <Stack.Screen name="AddDemand" component={AddDemandScreen}/>    
      <Stack.Screen name="EditDemand" component={EditDemandScreen}/>
     
  </Stack.Navigator>
  );
};

export default RootStackNavigator;
