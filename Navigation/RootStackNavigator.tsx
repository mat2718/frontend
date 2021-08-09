import { createStackNavigator,  TransitionPresets} from '@react-navigation/stack';
import { RootStackParamList} from '../types';
import SplashScreen from '../component/screens/splash';
import SplashScreen2 from '../component/screens/test';
import React from 'react';

//please import your screen and put in your screen in components-kai 
const Stack = createStackNavigator<RootStackParamList>();
const RootStackNavigator = () => {
  return (
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
      {/* <Stack.Screen name="Clients"
        component={}/> */}
    </Stack.Navigator>
  )
}

export default RootStackNavigator;