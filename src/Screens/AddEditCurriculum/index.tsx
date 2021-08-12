import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import Header from '../../Components/batches/Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { buttonStyles, inputStyles, screenStyles, textStyles } from '../../styles';
import Navigation from '../../Navigation';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  route: {
    params?: {
      curriculumName: string;
      createdOn: any;
      modifiedOn: any;
      createdBy: string;
      modifiedBy: string;
      skills: any;
      batches: any;
    };
  };
}

/** code complexity is above the threshold here according to sonarlint, might need to modularize parts of this */
const AddEditCurriculum: React.FC<IProps> = ({ route }) => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [modifiedBy, setModifiedBy] = useState('')
  const [batches, setBatches] = useState('');
  const [skills, setSkills] = useState('')
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [createdDate, setCreatedDate] = useState(new Date(Date.now()));
  const [modifiedDate, setModifiedDate] = useState(new Date(Date.now()));

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

  const onModifiedChange = (e: any, val: any) => {
    if (val) {
      setModifiedDate(val);
      setIsPickerShow(false);
    } else {
      setModifiedDate(new Date(Date.now()));
      setIsPickerShow(false);
    }
  };

  function convertDate(date: string | number | Date) {
    function pad(s: string | number) {
      return s < 10 ? '0' + s : s;
    }
    var d = new Date(date);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-');
  }

  /** Does it work? */
  return (
    <View style={screenStyles.safeAreaView}>
      <Header />
      <ScrollView style={screenStyles.mainView}>
        {/**Heading and button*/}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}
        >
          {/** Heading */}
          <Text style={textStyles.heading}>
            {route.params ? 'Edit Curriculum' : 'Add Curriculum'}
          </Text>
          {/**Add or Edit */}
          <TouchableOpacity style={buttonStyles.buttonContainer} onPress={() => navigation.goBack()}>
            <Text style={buttonStyles.buttonText}>Add</Text> 
          </TouchableOpacity>
        </View>

        {/**Form */}
        <View style={{flexDirection: 'row'}}>
          <Text style={inputStyles.inputLabelText}>Created On:</Text>
          <Text style={inputStyles.textInput}>{convertDate(createdDate)}</Text>
          {!isPickerShow && (
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={showPicker}
              >
                <Text style={styles.buttonText2}>
                  <MaterialCommunityIcons
                    name='calendar-edit'
                    size={20}
                    color='#474C55'
                  />
                </Text>
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

        <View style={{flexDirection: 'row'}}>
          <Text style={inputStyles.inputLabelText}>Created By:</Text>
          <TextInput 
          style={inputStyles.textInput}
          value={createdBy}
          onChangeText={createdBy => setCreatedBy(createdBy)}
          />
        </View>
        
        <View style={{flexDirection: 'row'}}>
          <Text style={inputStyles.inputLabelText}>Modified On:</Text>
          <Text style={inputStyles.textInput}>{convertDate(modifiedDate)}</Text>
          {!isPickerShow && (
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={showPicker}
              >
                <Text style={styles.buttonText2}>
                  <MaterialCommunityIcons
                    name='calendar-edit'
                    size={20}
                    color='#474C55'
                  />
                </Text>
              </TouchableOpacity>
            )}

            {isPickerShow && (
              <DateTimePicker
                value={modifiedDate}
                mode={'date'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={onModifiedChange}
                style={styles.datePicker}
              />
            )}
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={inputStyles.inputLabelText}>Last Modified By:</Text>
          <TextInput 
          style={inputStyles.textInput}
          value={modifiedBy}
          onChangeText={modifiedBy => setModifiedBy(modifiedBy)}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={inputStyles.inputLabelText}>Batches:</Text>
          <TextInput 
          style={inputStyles.textInput}
          value={batches}
          onChangeText={batches => setBatches(batches)}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={inputStyles.inputLabelText}>Skills:</Text>
          <TextInput 
          style={inputStyles.textInput}
          value={skills}
          onChangeText={skills => setSkills(skills)}
          />
        </View>

        {/**Save button */}
          <TouchableOpacity style={buttonStyles.buttonContainer}>
            <Text style={buttonStyles.buttonText}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 5,
    justifyContent: 'center',
  },
  buttonText2: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'FuturaBook',
    backgroundColor: '#72A4C2',
    borderRadius: 50,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  txtContainer: {
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 10,
    paddingVertical: 10,
    color: '#474C55',
    fontSize: 15,
    fontFamily: 'FuturaBold',
    borderRadius: 50,
  },
});

export default AddEditCurriculum;
