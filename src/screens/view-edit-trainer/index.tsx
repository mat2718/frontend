import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import ITrainer from '../../Entities/Trainer';
import { updateTrainer } from '../../redux/actions/trainers-actions';
import {
  inputStyles,
  screenStyles,
  buttonStyles,
  textStyles,
} from '../../styles';
import Toast from 'react-native-toast-message';

/**
 * Edit Trainer Screen - displays the edit screen for a specific trainer
 * @returns {React.FC} - React component that allows the user to submit changes to a trainers information
 * @author Joab Smith and Imran Ilyas
 */

const ViewEditTrainer: React.FC = () => {
  // Routing to pass Trainer information as parameters
  const route = useRoute();
  const params = route.params as ITrainer;

  // hooks for textinput
  const [firstName, setFirstName] = useState(params.trainerfirst);
  const [lastName, setLastName] = useState(params.trainerlast);
  const [email, setEmail] = useState(params.email);
  const dispatch = useDispatch();

  // Axios request to update a trainer's information upon press
  const update = () => {
    const newTrainer: ITrainer = {
      trainerfirst: firstName,
      trainerlast: lastName,
      email: email,
      trainerid: params.trainerid,
    };
    dispatch(updateTrainer(newTrainer));
    // Display message upon updating a trainer
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Updated Trainer!',
      text2: `You have successfully updated trainer: ${newTrainer.trainerfirst} ${newTrainer.trainerlast}`,
      bottomOffset: 50,
    });
  };

  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/** Heading and button */}
        <View style={screenStyles.mainView}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}
          >
            {/** Heading text */}
            <Text style={textStyles.heading}>Edit Trainer</Text>
            {/** Update */}
            <TouchableOpacity
              style={buttonStyles.buttonContainer}
              onPress={() => update()}
            >
              <Text style={buttonStyles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
          {/** Form view */}
          {/** Client name */}
          <View style={{ flexDirection: 'column' }}>
            <Text style={inputStyles.inputLabelText}>First Name:</Text>
            <TextInput
              style={inputStyles.textInput}
              testID='Firstname'
              placeholder='First Name'
              onChangeText={setFirstName}
            >
              {firstName}
            </TextInput>

            <Text style={inputStyles.inputLabelText}>Last Name:</Text>
            <TextInput
              style={inputStyles.textInput}
              testID='Lastname'
              placeholder='Last Name'
              onChangeText={setLastName}
            >
              {lastName}
            </TextInput>

            <Text style={inputStyles.inputLabelText}>Email:</Text>
            <TextInput
              style={inputStyles.textInput}
              testID='Email'
              placeholder='Email'
              onChangeText={setEmail}
            >
              {email}
            </TextInput>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ViewEditTrainer;
