import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput, View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { inputStyles, colors } from '../../../styles';
import MultiSelect from 'react-native-multiple-select';
import ISkill from '../../../entities/skill';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSkills, getSkillById } from '../../../redux/actions/skill-actions';
import { IAppState } from '../../../redux/state';


const AddCurriculum: React.FC = () => {
    const [name, setName] = useState(''); 
    const [createdBy, setCreatedBy] = useState('');
    
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [createdDate, setCreatedDate] = useState(new Date(Date.now()));
    
    const [skills, setSkills] = useState<ISkill[]>([]);
    const dispatch = useDispatch();
    const skillArr = useSelector((state: IAppState) => state.skills)

    useEffect(() => {
      dispatch(getAllSkills())
    }, []);
  
    const onSkillChange = (skills: any) => {
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
      <View style={{marginTop: 20}}>
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
          <View style={{marginBottom: 10}}>
            <Text style={inputStyles.inputLabelText}>Skills:</Text>
          </View>
            <MultiSelect
            hideTags
            items={skillArr}
            uniqueKey="skillname"
            displayKey="skillname"
            onSelectedItemsChange={(skills: any) => onSkillChange(skills)}
            styleDropdownMenuSubsection={inputStyles.pickerContainer}
            submitButtonColor={colors.orange}
            submitButtonText="Done"
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

        <View style={styles.form}>
            <Text style={inputStyles.inputLabelText}>Created By:</Text>
            <TextInput
            value={createdBy}
            onChangeText={(createdByText) => setCreatedBy(createdByText)}
            style={inputStyles.textInput}
            />
        </View>

    </View>
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
    flex: 1,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  }
})

export default AddCurriculum;

