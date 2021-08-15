import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/batches/header';
import { addClient } from '../../redux/actions/client-actions';
import { useDispatch } from 'react-redux';
import {
  screenStyles,
  textStyles,
  inputStyles,
  buttonStyles,
} from '../../styles';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
import axios from '../../../axiosConfig'
import { useDispatch, useSelector } from 'react-redux';
import { addClient } from '../../redux/actions/client-actions';

/** Mock data for curriculum */
const dataCurricula = ['React Native/Cloud Native', 'Java', 'Python'];
/** Mock data for trainer */
const dataTrainer = ['Robert Connell', 'Matthew Otto', 'Red Oral'];
=======
import axios from '../../../axiosConfig';
>>>>>>> 35e63a36562ee15337adb94d16173196063b75e3

const AddClient: React.FC = () => {
  /** Navigation for going back a screen */
  const navigation = useNavigation();
<<<<<<< HEAD
  const[client, setClient]=useState("");
  const dispatch=useDispatch()
  const addOneClient =()=>{
    dispatch(addClient({clientName:client}))
    console.log(client);
  }
  
  
 
=======
  const [client, setClient] = useState('');

  const dispatch = useDispatch();

  const addClientClick = () => {
    dispatch(
      addClient({
        clientName: client,
      })
    );

    navigation.goBack();
  };
>>>>>>> 35e63a36562ee15337adb94d16173196063b75e3

  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      <Header />
      <ScrollView style={screenStyles.mainView}>
        {/** Heading and button */}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}
        >
          {/** Heading text */}
          <Text style={textStyles.heading}>Add a Client</Text>
          {/** Add/Edit */}
          <TouchableOpacity
            style={buttonStyles.buttonContainer}
<<<<<<< HEAD
            onPress={() => addOneClient()
             }
=======
            onPress={() => addClientClick()}
>>>>>>> 35e63a36562ee15337adb94d16173196063b75e3
          >
            <Text style={buttonStyles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        {/** Form view */}
        {/** Client name */}
        <View style={{ flexDirection: 'column' }}>
          <Text style={inputStyles.inputLabelText}>Client name</Text>
          <TextInput style={inputStyles.textInput} onChangeText={setClient} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddClient;
