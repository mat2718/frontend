import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import React from 'react';
import ViewBatch from '../../screens/view-batch';
import Navigation from '..';
import AddBatch from '../../screens/add-batch';
import EditBatch from '../../screens/edit-batch';
import AddEditCurriculum from '../../screens/add-edit-curriculum';
import AddClient from '../../screens/add-client';
import CreateTrainer from '../../screens/create-trainer';
import ViewEditTrainer from '../../screens/view-edit-trainer';
import ViewClient from '../../screens/view-client';
import Diagram from '../../screens/diagram';
import AddDemand from '../../screens/add-demand';
import Skills from '../../screens/skills';
import AddSkill from '../../screens/add-skill';
import { colors } from '../../styles';
import { useDispatch } from 'react-redux';
import { getAllBatches } from '../../redux/actions/batch-actions';
import { getAllClients } from '../../redux/actions/client-actions';
import { GetAllCurricula } from '../../redux/actions/curriculum-actions';
import { getAllSkills } from '../../redux/actions/skill-actions';
import { getAllTrainers } from '../../redux/actions/trainers-actions';
import { getAllDemand } from '../../redux/actions/demand-actions';

//see what happens
//please import your screen and put in your screen in components-kai
const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const dispatch = useDispatch();

  /** Load in db data and store in the redux state */
  React.useEffect(() => {
    dispatch(getAllBatches());
    dispatch(getAllTrainers());
    dispatch(getAllDemand());
    dispatch(getAllClients());
    dispatch(GetAllCurricula());
    dispatch(getAllSkills());
  }, [dispatch]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name='Main' component={Navigation} />
      <Stack.Screen
        name='ViewBatch'
        component={ViewBatch}
        options={{
          headerShown: true,
          title: 'Batch',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: 'FuturaBook',
            fontWeight: '700',
            color: colors.darkGray,
          },
        }}
      />
      <Stack.Screen
        name='AddBatch'
        component={AddBatch}
        options={{
          headerShown: true,
          title: 'Add a Batch',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: 'FuturaBook',
            fontWeight: '700',
            color: colors.darkGray,
          },
        }}
      />
      <Stack.Screen
        name='EditBatch'
        component={EditBatch}
        options={{
          headerShown: true,
          title: 'Edit Batch',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: 'FuturaBook',
            fontWeight: '700',
            color: colors.darkGray,
          },
        }}
      />
      <Stack.Screen
        name='AddTrainer'
        component={CreateTrainer}
        options={{ 
          headerShown: true,
          title: 'Add a Trainer',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: 'FuturaBook',
            fontWeight: '700',
            color: colors.darkGray,
          },
        }}
      />
      <Stack.Screen
        name='ViewEditTrainer'
        component={ViewEditTrainer}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name='Skills'
        component={Skills}
        options={{
          headerShown: true,
          title: 'Skills',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: 'FuturaBook',
            fontWeight: '700',
            color: colors.darkGray,
          },
        }}
      />

      <Stack.Screen
        name='AddSkill'
        component={AddSkill}
        options={{
          headerShown: true,
          title: 'Skills',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: 'FuturaBook',
            fontWeight: '700',
            color: colors.darkGray,
          },
        }}
      />
      {/** add your view/addedit screens here */}
      <Stack.Screen 
        name='AddEditCurriculum' 
        component={AddEditCurriculum}
        options={{
          headerShown: true,
          title: 'Add a Curriculum',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: 'FuturaBook',
            fontWeight: '700',
            color: colors.darkGray,
          },
        }}
      />
      <Stack.Screen
        name='ViewClient'
        component={ViewClient}
        options={{
          headerShown: true,
          title: 'Client',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: 'FuturaBook',
            fontWeight: '700',
            color: colors.darkGray,
          },
        }}
      />
      <Stack.Screen
        name='AddClient'
        component={AddClient}
        options={{
          headerShown: true,
          title: 'Add a Client',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: 'FuturaBook',
            fontWeight: '700',
            color: colors.darkGray,
          },
        }}
      />
      <Stack.Screen
        name='Diagram'
        component={Diagram}
        options={{
          headerShown: true,
          title: 'Diagram',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: 'FuturaBook',
            fontWeight: '700',
            color: colors.darkGray,
          },
        }}
      />
      <Stack.Screen
        name='AddDemand'
        component={AddDemand}
        options={{
          headerShown: true,
          title: 'Add Demand',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: 'FuturaBook',
            fontWeight: '700',
            color: colors.darkGray,
          },
        }}
      />
      {/*<Stack.Screen name='EditDemand' component={EditDemand} />
       <Stack.Screen name='Clients' component={ClientScreen} />
      <Stack.Screen name='EditClient' component={EditClient} />
      <Stack.Screen name='AddClient' component={AddClient} />
      
      */}
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
