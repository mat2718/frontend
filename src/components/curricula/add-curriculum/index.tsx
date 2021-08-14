import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput, View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { inputStyles, colors } from '../../../styles';

interface ICurriculum {
    batches: [];
    createdBy: string;
    createdOn: string;
    id: number;
    lastModified: string;
    lastModifiedBy: string;
    name: string;
    skills: [];
}

const AddCurriculum: React.FC = () => {
    const route = useRoute();
    const params = route.params as ICurriculum;
    const navigation = useNavigation();
    const [name, setName] = useState(''); 
    const [createdBy, setCreatedBy] = useState('');
    const [skills, setSkills] = useState<string[]>([]);
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [createdDate, setCreatedDate] = useState(new Date(Date.now()));

    const onChangeSkills = (id: string[]) => {
      setSkills(id);
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

        <View style={styles.form2}>
            <Text style={inputStyles.inputLabelText}>Skills:</Text>
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
  },
  form2: {
    flex: 1,
    width: '97%',
    alignContent: 'center',
    justifyContent: 'center',
  }
})

export default AddCurriculum;

