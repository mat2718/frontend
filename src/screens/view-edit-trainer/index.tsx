import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Text, TextInput, SafeAreaView, ScrollView } from 'react-native';
import ITrainer from '../../Entities/Trainer';
import { inputStyles, screenStyles, buttonStyles, textStyles } from '../../styles';
/**
 * Authors: Joab Smith and Imran Ilyas
 **/
const fillertrainer = {
  FirstName: 'John',
  LastName: 'Doe',
  Email: 'johndoe@hotmail.com',
};
interface IProps
{

}

const ViewEditTrainer: React.FC<IProps> = (props: IProps) =>
{

  const route = useRoute();
  const params = route.params as ITrainer;
  // console.log(params);
  const [trainer, setTrainer] = useState(fillertrainer);
  const [firstName, setFirstName] = useState(params.trainerfirst);
  const [lastName, setLastName] = useState(params.trainerlast);
  const [email, setEmail] = useState(params.email);

  const update = () =>
  {
    //update redux 
    //axios
    console.log('Update');
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
          {/** Add/Edit */}
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
              selection={{ start: 1 }}
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
    // <View style = {styles.container}>
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={screenStyles.safeAreaView}>
    //     <View >
    //       <Text style={styles.header}>Edit Trainer</Text>

    //       <View style={styles.fieldCols}>
    //       {/* <View style={styles.fieldRow}> */}
    //         

    //       </View>

    //       {/* </View> */}
    //       <TouchableOpacity style={styles.touchableStyle} onPress={update}>
    //         <Text style={styles.submit}>Update</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </TouchableWithoutFeedback>
      
    // </View>
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

export default ViewEditTrainer;
