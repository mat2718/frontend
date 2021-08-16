import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { addSkill } from '../../redux/actions/skill-actions';
import { useDispatch } from 'react-redux';
import {
  screenStyles,
  textStyles,
  inputStyles,
  buttonStyles,
} from '../../styles';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

/**
 * Add Skill - main screen for adding a new skill
 * @returns {React.FC} - the screen for adding a new skill
 * @author Oriel Red Oral
 */

const AddSkill: React.FC = () => {
  /** Navigation for going back a screen */
  const navigation = useNavigation();
  const [skill, setSkill] = useState('');

  const dispatch = useDispatch();

  const addClientClick = () => {
    dispatch(
      addSkill({
        skillName: skill,
      })
    );
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Success!',
      text2: `Skill has been added!`,
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
          <Text style={textStyles.heading}>Add a Skill</Text>
          {/** Add/Edit */}
          <TouchableOpacity
            style={buttonStyles.buttonContainer}
            onPress={() => addClientClick()}
          >
            <Text style={buttonStyles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        {/** Form view */}
        {/** Skill name */}
        <View style={{ flexDirection: 'column' }}>
          <Text style={inputStyles.inputLabelText}>Skill name</Text>
          <TextInput style={inputStyles.textInput} onChangeText={setSkill} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddSkill;
