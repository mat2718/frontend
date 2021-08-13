import React from 'react';
import { useState } from 'react';
import
{
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView
} from 'react-native';
import { useDispatch } from 'react-redux';
import ITrainer from '../../Entities/Trainer';
import { addTrainer } from '../../redux/actions/trainers-actions';
import { inputStyles, screenStyles, buttonStyles, textStyles } from '../../styles';

/**
 * Create Trainer Screen - Screen for creating a new trainer
 * @returns {React.FC} - React Component that will add a trainer to the database upon submission
 * @author Joab Smith and Imran Ilyas
 **/

const CreateTrainer: React.FC = () =>
{
  //Textinput hooks
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  //Calls Axios Request from Actions folder upon press
  const submit = () =>
  {
    const newTrainer: ITrainer = {
      trainerfirst: firstName,
      trainerlast: lastName,
      email: email,
      trainerid: 0
    }
    //toast
    dispatch(addTrainer(newTrainer));
    console.log('Submit');
  };

  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      {/* Keyboard dismisses upon pressing off keyboard */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={screenStyles.mainView}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}
          >
            {/** Heading text */}
            <Text style={textStyles.heading}>Add a Trainer</Text>
            {/** Add/Edit */}
            <TouchableOpacity
              style={buttonStyles.buttonContainer}
              onPress={() => submit()}
            >
              <Text style={buttonStyles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>

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

export default CreateTrainer;
