import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';



/** Mock data for curriculum */
const dataCurricula = ['React Native/Cloud Native', 'Java', 'Python'];

const AddDemand: React.FC  = ({route}) => {
  /** Navigation for going back a screen */
  const [client, setClient]=useState(route.params.clientid)
  const [howMany, setHowMany]=useState(0)
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = React.useState('all');
  const [isStartPickerShow, setIsStartPickerShow] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date(Date.now()));
 
  /** Input listener for Start Date Picker */


  const AddDemand=()=>{
    // axios.post('/demand',{
    //   clientid: client,
    //   curriculumid: number,
    //   needby: string,
    //   quantitydemanded: howMany
    // })
  }



  const onStartChange = (e: any, val: any) => {
    if (val) {
      setStartDate(val);
      setIsStartPickerShow(false);
    } else {
      setStartDate(new Date(Date.now()));
      setIsStartPickerShow(false);
    }
  };


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
          <Text style={textStyles.heading}>Add a Demand</Text>
          {/** Add/Edit */}
          <TouchableOpacity
            style={buttonStyles.buttonContainer}
            onPress={() => navigation.navigate('AddDemand')}
          >
            <Text style={buttonStyles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        {/** Form view */}
       
        <View style={{ flexDirection: 'column' }}>
          <Text style={inputStyles.inputLabelText}>Current Client </Text>
          <Text style={inputStyles.textInput} >{route.params.client}</Text>
        </View>
        {/** Curriculum  */}
        <Text style={inputStyles.inputLabelText}>Curriculum</Text>
          {/** Picker Container */}
          <View style={inputStyles.pickerContainer}>
            <Picker
              selectedValue={selectedFilter}
              mode='dropdown'
              onValueChange={(itemValue: any, itemIndex: any) =>
                setSelectedFilter(itemValue)
              }
              style={{ width: '100%', height: 50 }}
            >
              {dataCurricula.map((curr) => {
                return <Picker.Item label={curr} value={curr} key={curr} />;
              })}
            </Picker>
          </View>
      
        <View style={{ flexDirection: 'column' }}>
          <Text style={inputStyles.inputLabelText}>Enter # of Associates Needed </Text>
          <TextInput style={inputStyles.textInput} keyboardType='numeric' />
        </View>
        
        
            {/** Start Date */}
            <View style={{ flexDirection: 'column' }}>
              <Text style={inputStyles.inputLabelText}>Select Date Needed By</Text>
              <TouchableOpacity
                style={styles.dateView}
                onPress={() => setIsStartPickerShow(true)}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <MaterialCommunityIcons
                    name='calendar-import'
                    size={20}
                    color={colors.darkGray}
                  />
                  <Text style={styles.dateText}>
                    {startDate.toDateString()}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* The date picker */}
            {isStartPickerShow && (
              <DateTimePicker
                value={startDate}
                mode={'date'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={onStartChange}
                style={styles.datePicker}
              />
            )}

      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  dateView: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    height: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 5,
  },

  dateText: {
    color: colors.darkGray,
    paddingLeft: 5,
  },
});

export default AddDemand;
