import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { addClient } from '../../redux/actions/client-actions';
import { useDispatch } from 'react-redux';
import {
  screenStyles,
  textStyles,
  inputStyles,
  buttonStyles,
} from '../../styles';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const AddClient: React.FC = () => {
  /** Navigation for going back a screen */
  const navigation = useNavigation();
  const [client, setClient] = useState('');

  const dispatch = useDispatch();

  const addClientClick = () => {
    dispatch(
      addClient({
        clientName: client,
      })
    );
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Success!',
      text2: `Client has been added!`,
      topOffset: 125,
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
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
            onPress={() => addClientClick()}
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
