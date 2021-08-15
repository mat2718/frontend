import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput, View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { inputStyles, colors, screenStyles, textStyles, buttonStyles } from '../../../styles';
import MultiSelect from 'react-native-multiple-select';
import ISkill from '../../../entities/skill';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../../redux/state';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import { PostCurriculum } from '../../../redux/actions/curriculum-actions';
import Toast from 'react-native-toast-message';


const AddCurriculum: React.FC = () => {
    const [name, setName] = useState(''); 
    const [createdBy, setCreatedBy] = useState('');
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [createdDate, setCreatedDate] = useState(new Date(Date.now()));
    
    const [skills, setSkills] = useState([])
    const skillArr = useSelector((state: IAppState) => state.skills);

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
        //add a scuccess toast for each filled in input
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Success!',
          text2: `Curriculum: ${newCurriculum.curriculumname} has been added.`
        })
        navigation.navigate('AddEditCurriculum');
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

    const onSkillChange = (skills: ISkill) => {
      setSkills(skills);
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

    return (
      <>
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
            <TouchableOpacity onPress={showPicker}>
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
                value={createdDate}
                mode={'date'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={onCreatedChange}
                style={styles.datePicker}
            />
            )}
        </View>
    </View>
    </>
    )
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
})

export default AddCurriculum;

