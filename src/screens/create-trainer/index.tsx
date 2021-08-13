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
import ITrainer from '../../Entities/Trainer';
import { inputStyles, screenStyles, buttonStyles, textStyles } from '../../styles';

/**
 * Authors: Joab Smith and Imran Ilyas
 **/
const CreateTrainer: React.FC = () =>
{
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const submit = () =>
  {
    const newTrainer: ITrainer = {
      trainerfirst: firstName,
      trainerlast: lastName,
      email: email,
      trainerid: 0
    }
    //toast
    //make axios call
    //update Redux
    console.log('Submit');
  };

  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={screenStyles.mainView}>
        {/* <Header/> */}
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
const styles = StyleSheet.create({
  header: {
    margin: '2%',
    fontSize: 30,
    textAlign: 'center',
  },

  label: {
    fontSize: 20,
    // width: '150%',
    paddingVertical: '10%',
    // alignSelf: 'flex-end'
    textAlign: 'right',
  },

  input: {
    // flexDirection: 'row',
    // width: '150%',
    fontSize: 20,
    paddingVertical: '10%',
    textAlign: 'left',
  },

  fieldCols: {
    flex: 1,
    marginVertical: '10%',
    marginHorizontal: '2%',
    //alignContent: 'space-between',
    alignContent: 'center',
    justifyContent: 'center',
  },

  touchableStyle: {
    backgroundColor: '#F26925',
    alignSelf: 'center',
    borderRadius: 100,
    margin: '10%',
  },

  submit: {
    color: 'white',
    fontSize: 20,
    padding: '4%',
    textAlign: 'center',
    //margin: '4%',
  },
});
export default CreateTrainer;
