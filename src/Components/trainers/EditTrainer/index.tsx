import React from 'react';
import { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { inputStyles } from '../../../styles';

/**
 * Authors: Joab Smith and Imran Ilyas
 **/

interface ITrainer {
  FirstName: string;
  LastName: string;
  Email: string;
  ID: string;
}

interface IProps {
  trainer: ITrainer;
  setEdit: (value: boolean) => void;
}
const EditTrainer: React.FC<IProps> = (props: IProps) => {
  const [firstName, setFirstName] = useState(props.trainer.FirstName);
  const [lastName, setLastName] = useState(props.trainer.LastName);
  const [email, setEmail] = useState(props.trainer.Email);
  const [ID, setID] = useState(props.trainer.ID);

  const update = () => {
    console.log('Update');
    props.setEdit(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.header}>Edit Trainer</Text>

        {/* <View style={styles.fieldRow}> */}
        <View style={styles.fieldCols}>
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
            selection={{ start: 1 }}
            testID='Email'
            placeholder='Email'
            onChangeText={setEmail}
          >
            {email}
          </TextInput>

          <Text style={inputStyles.inputLabelText}>ID:</Text>
          <TextInput
            style={inputStyles.textInput}
            testID='ID'
            placeholder='ID Number'
            onChangeText={setID}
          >
            {ID}
          </TextInput>
        </View>
        {/* </View> */}

        <TouchableOpacity style={styles.touchableStyle} onPress={update}>
          <Text style={styles.submit}>Update</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginVertical: '10%',
    marginHorizontal: '2%',
  },

  header: {
    margin: '2%',
    fontSize: 30,
    textAlign: 'center',
  },

  fieldRow: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
  },

  label: {
    fontSize: 20,
    width: '30%',
    paddingVertical: '10%',
    textAlign: 'right',
    //alignSelf: 'flex-end'
  },

  input: {
    // flexDirection: 'row',
    width: '70%',
    fontSize: 20,
    //paddingVertical: '10%',
    textAlign: 'center',
  },

  fieldCols: {
    flex: 1,
    width: '100%',
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
  },
});
export default EditTrainer;
