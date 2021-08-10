import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import SplashScreen from '../component/screens/splash';
import SplashScreen2 from '../component/screens/test';
import React from 'react';
<<<<<<< HEAD
import ClientScreen from '../src/Screens/Clients/ClientScreen';
import EditClient from '../src/components/Clients/EditClient';
import AddClient from '../src/components/Clients/AddClient';
import AddDemandScreen from '../src/components/Clients/AddDemandScreen';
import EditDemandScreen from '../src/components/Clients/EditDemandScreen';
=======
import ViewBatch from '../src/screens/ViewBatch';
import Navigation from '.';
import RootTabNavigator from './RootTabNavigator';
import AddEditBatch from '../src/screens/AddEditBatch';
>>>>>>> 16313348afd33167a6b0626202a80ff4c5d66ca2

//please import your screen and put in your screen in components-kai
const Stack = createStackNavigator<RootStackParamList>();
const RootStackNavigator = () => {
  return (
<<<<<<< HEAD
    <Stack.Navigator screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}>
      <Stack.Screen name="Splash"
        component={SplashScreen}/>
      <Stack.Screen name="Splash2"
        component={SplashScreen2}/>
      {/* <Stack.Screen name="Batches"
        component={}/> */}
      {/* <Stack.Screen name="Diagram"
        component={}/> */}
      {/* <Stack.Screen name="Skills"
        component={}/> */}
      {/* <Stack.Screen name="Calendar"
        component={}/> */}
      {/* <Stack.Screen name="Trainer"
        component={}/> */}
      {/* <Stack.Screen name="Curricula"
        component={}/> */}
      <Stack.Screen name="Clients"
        component={ClientScreen}/>
      <Stack.Screen name="EditClient"
        component={EditClient}/>
      <Stack.Screen name="AddClient"
        component={AddClient}/>
      <Stack.Screen name="AddDemand"
        component={AddDemandScreen}/>    
      <Stack.Screen name="EditDemand"
        component={EditDemandScreen}/>
=======
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name='Main' component={Navigation} />
      <Stack.Screen name='ViewBatch' component={ViewBatch} />
      <Stack.Screen name='AddEditBatch' component={AddEditBatch} />
      {/** add your view/addedit screens here */}
>>>>>>> 16313348afd33167a6b0626202a80ff4c5d66ca2
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
