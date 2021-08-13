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
import Header from '../../components/batches/header';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { screenStyles, textStyles } from '../../styles';

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
  const [text, setText] = useState('');

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
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}
        >
          <Text style={textStyles.heading}>
            {route.params ? 'Edit Curriculum' : 'Add Curriculum'}
          </Text>
        </View>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.txtContainer}>Created On</Text>
            <Text style={styles.input}>{convertDate(createdDate)}</Text>
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
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.txtContainer}>Created By:</Text>
            <TextInput
              value={text}
              onChangeText={(createdByText) => setText(createdByText)}
              style={styles.input}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.txtContainer}>Last Modified On:</Text>
            <Text style={styles.input}>{convertDate(modifiedDate)}</Text>
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

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.txtContainer}>Last Modified By:</Text>
            <TextInput
              value={text}
              onChangeText={(modifiedByText) => setText(modifiedByText)}
              style={styles.input}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.txtContainer}>Batches:</Text>
            <TextInput
              value={text}
              onChangeText={(batchesText) => setText(batchesText)}
              style={styles.input}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.txtContainer}>Skills:</Text>
            <TextInput
              value={text}
              onChangeText={(skillsText) => setText(skillsText)}
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.saveBtnContainer}>
            <Text style={styles.saveBtn}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 8,
  },
  title: {
    margin: 10,
    marginTop: 20,
    fontFamily: 'FuturaBold',
    fontSize: 22,
  },
  input: {
    margin: 10,
    borderRadius: 50,
    marginHorizontal: 10,
    padding: 10,
    paddingHorizontal: 'auto',
  },
  saveBtnContainer: {
    alignSelf: 'flex-end',
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: '#F26925',
    borderRadius: 50,
    marginHorizontal: 10,
  },
  saveBtn: {
    padding: 10,
    color: '#fff',
    fontSize: 15,
    fontFamily: 'FuturaBold',
    justifyContent: 'center',
  },
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
