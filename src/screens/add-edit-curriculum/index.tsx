import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Platform } from 'react-native';
import { buttonStyles, colors, inputStyles, screenStyles, textStyles } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { PostCurriculum } from '../../redux/actions/curriculum-actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootStackParamList } from '../../types';
import { IAppState } from '../../redux/state';
import Toast from 'react-native-toast-message';
import ISkill from '../../entities/skill';
import MultiSelect from 'react-native-multiple-select';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * Add Curriculum Screen- allows for addition of a curriculum
 * @returns {React.FC} - React Component that will add a curriculum to the database once saved
 * @author Hannah Mulato
 */


const AddEditCurriculum: React.FC = () => {
  //initializing states for each input field
  const [name, setName] = useState(''); 
  const [createdBy, setCreatedBy] = useState('');
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [createdDate, setCreatedDate] = useState(new Date(Date.now()));
  const [skills, setSkills] = useState<ISkill[]>([]);

  //get all skills from database for multi-select picker input
  const skillArr = useSelector((state: IAppState) => state.skills);

  //initializing navigation and dispatch
  const navigation = useNavigation<RootStackParamList>();  
  const dispatch = useDispatch()

  //post Curriculum function for add-curriculum screen
  const postCurriculum = () => {
    const newCurriculum = {
      curriculumname: name,
      createdby: createdBy,
      createdon: createdDate.toISOString(),
      skillIdArr: skills
  }

  const json = JSON.stringify(newCurriculum);

  if(newCurriculum.createdby && newCurriculum.createdon && newCurriculum.curriculumname && newCurriculum.skillIdArr) {
    dispatch(PostCurriculum(json));
    //add a success toast for each filled in input
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Success!',
      topOffset: 50,
      text2: `Curriculum: ${newCurriculum.curriculumname} has been added.`
    })
    //fail toast for non-filled inputs
  } else {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Error',
      text2:`You have failed to fill in all the required fields below.`
    })
  }
}


  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onCreatedChange = (e: any, val: any) => {
    if (val) {
      setCreatedDate(val);
      setIsPickerShow(false);
    } else {
      setCreatedDate(new Date(Date.now()));
      setIsPickerShow(false);
    }
  };

  const onSkillChange = (skills: ISkill[]) => {
    setSkills(skills);
  }
  return (
    <View style={screenStyles.safeAreaView}>
      <View style={screenStyles.mainView}>
        
        <View style={screenStyles.titleContainer}>
          <Text style={textStyles.heading}>Add Curriculum</Text>
          <TouchableOpacity
              style={buttonStyles.buttonContainer}
              onPress={postCurriculum}
          >
              <Text style={buttonStyles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 10}}>
          {/**Form View */}
          <View style={styles.form}>
              <Text style={inputStyles.inputLabelText}>Name:</Text>
              <TextInput
              testID='Name'
              onChangeText={name => setName(name)}
              value={name}
              style={inputStyles.textInput}
              />
          </View>

          <View style={styles.form}>
              <Text style={inputStyles.inputLabelText}>Created By:</Text>
              <TextInput
              value={createdBy}
              onChangeText={(createdByText) => setCreatedBy(createdByText)}
              style={inputStyles.textInput}
              />
          </View>

          <View style={styles.form}>
            <View style={{marginBottom: 10}}>
              <Text style={inputStyles.inputLabelText}>Skills:</Text>
            </View>
              <MultiSelect
              hideTags={false}
              items={skillArr}
              uniqueKey="skillid"
              displayKey="skillname"
              onSelectedItemsChange={(skills: any) => onSkillChange(skills)}
              selectedItems={skills}
              selectedItemTextColor={colors.blue}
              tagTextColor={colors.white}
              selectText="  Choose skills"
              searchInputPlaceholderText="Search Skills..."
              selectedItemFontFamily="FuturaBook"
              itemFontFamily="FuturaBook"
              fontFamily="FuturaBook"
              fontSize={12}
              tagBorderColor={colors.orange}
              tagContainerStyle={{backgroundColor: colors.orange}}
              styleDropdownMenuSubsection={inputStyles.pickerContainer}
              tagRemoveIconColor={colors.white}
              submitButtonColor={colors.orange}
              submitButtonText="Done"
              styleSelectorContainer={{borderRadius: 30}}
              styleListContainer={{borderRadius: 30}}
              />
          </View>

          <View style={styles.form}>
              <Text style={inputStyles.inputLabelText}>Created On:</Text>
              {!isPickerShow && (
              <TouchableOpacity onPress={showPicker} testID='dateBtn' >
                  <Text style={inputStyles.textInput}>
                      <MaterialCommunityIcons
                      name='calendar-edit'
                      size={20}
                      color='#474C55'
                      />{'     '}
                      {createdDate.toDateString()}</Text>
                  
              </TouchableOpacity>
              )}

              {isPickerShow && (
              <DateTimePicker
                  testID='dateTest'
                  value={createdDate}
                  mode={'date'}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={onCreatedChange}
                  style={styles.datePicker}
              />
              )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  form: {
    width: '100%',
    marginTop: 5, 
    marginBottom: 5
  }
});

export default AddEditCurriculum;
