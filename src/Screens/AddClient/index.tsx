import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/batches/header';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  screenStyles,
  textStyles,
  inputStyles,
  colors,
  buttonStyles,
} from '../../styles';
import { useNavigation } from '@react-navigation/native';

/** Mock data for curriculum */
const dataCurricula = ['React Native/Cloud Native', 'Java', 'Python'];
/** Mock data for trainer */
const dataTrainer = ['Robert Connell', 'Matthew Otto', 'Red Oral'];

const AddClient: React.FC = () => {
  /** Navigation for going back a screen */
  const navigation = useNavigation();

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
            onPress={() => navigation.goBack()}
          >
            <Text style={buttonStyles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        {/** Form view */}
        {/** Client name */}
        <View style={{ flexDirection: 'column' }}>
          <Text style={inputStyles.inputLabelText}>Client name</Text>
          <TextInput style={inputStyles.textInput} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddClient;
