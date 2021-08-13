import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import React from 'react';
import ViewBatch from '../../screens/view-batch';
import Navigation from '..';
import AddEditBatch from '../../screens/add-edit-batch';
import Curricula from '../../screens/curricula';
import AddEditCurriculum from '../../screens/add-edit-curriculum';
import AddClient from '../../screens/add-client';
import CreateTrainer from '../../screens/create-trainer';
import ViewEditTrainer from '../../screens/view-edit-trainer';
import ViewClient from '../../screens/view-client';
import Diagram from '../../screens/diagram';
import AddDemand from '../../screens/add-demand';
import EditDemand from '../../screens/edit-demand';
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
      <Stack.Screen
        name='AddTrainer'
        component={CreateTrainer}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name='ViewEditTrainer'
        component={ViewEditTrainer}
        options={{ headerShown: true }}
      />
      {/** add your view/addedit screens here */}
      <Stack.Screen name='Curricula' component={Curricula} />
      <Stack.Screen name='AddEditCurriculum' component={AddEditCurriculum} />
      <Stack.Screen name='ViewClient' component={ViewClient} />
      <Stack.Screen name='AddClient' component={AddClient} />
      <Stack.Screen name='Diagram' component={Diagram} options={{ headerShown: true }} />
      <Stack.Screen name='AddDemand' component={AddDemand} />
      <Stack.Screen name='EditDemand' component={EditDemand} />
      {/* <Stack.Screen name='Clients' component={ClientScreen} />
      <Stack.Screen name='EditClient' component={EditClient} />
      <Stack.Screen name='AddClient' component={AddClient} />
      
      */}
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
