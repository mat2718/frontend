import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Picker,
  TouchableOpacity,
  Platform,
} from 'react-native';
import GlobalStyles from '../../assets/constants/GlobalStyles';

import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarPicker from 'react-native-calendar-picker';
import Header from '../header/index'
import CurriculumList from './CurriculumList';
import { TextInput } from 'react-native-gesture-handler';
import IDemand from '../../assets/models/Demand';
import colors from '../../assets/constants/colors';
import IClient from '../../assets/models/Client';
import moment from 'moment';

let today = new Date();

//sends client name as prop to add to demand
const AddDemandScreen = (props: any) => {
  const [currCurriculum, setCurriculum] = useState('');
  const [demandDate, setDemandDate] = useState(today);
  const [howMany, setHowMany] = useState(0);

  //sets name for mockable stuff

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Header />
      <View>
        <Text style={GlobalStyles.h1}>Select Date Needed By</Text>
      </View>
      <View>
        {/*Loads a calendar with a min date set so nothing before current date can be selected*/}
        <CalendarPicker
          minDate={today}
          onDateChange={(date) => {
            console.log(demandDate);
            console.log(date);
            setDemandDate(date);
            console.log(demandDate);
          }}
        />
      </View>
      <View>
        <Text style={GlobalStyles.h1}>Select Curriculum:</Text>
        <CurriculumList setCurriculum={setCurriculum} />
      </View>
      <View style={styles.numEntry}>
        <Text style={GlobalStyles.h2}> # of Associates Required:</Text>

        {/*Gets a numerical input and sends it to the date prop*/}
        <TextInput
          style={GlobalStyles.textInput}
          keyboardType='numeric'
          defaultValue={'0'}
          onChangeText={(text) => setHowMany(parseInt(text))}
        />
      </View>
      {/* Senda all info to a display object to view before posting*/}
      <View style={styles.demand}>
        <Text>
          Clients: {props.route.params[0]}
          {'\n'}
          Curriculum: {currCurriculum} {'\n'}
          {/* Needed By:{demandDate.getMonth()}/{demandDate.getDate()}/{demandDate.getFullYear()}{"\n"} */}
          Needed By: {moment(demandDate).format('MM-DD-YYYY')}
          {'\n'}# of Associates Needed: {howMany}
          {'\n'}
        </Text>

        <View>
          <TouchableOpacity>
            <Text style={GlobalStyles.button}>Add{'\n'}Demand</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  demand: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 5,
    alignSelf: 'center',

    padding: 10,
    paddingLeft: 10,
    marginBottom: 10,
    width: '95%',
    shadowColor: colors.primaryGray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 35,
    backgroundColor: colors.secondaryBlue,
  },
  numEntry: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  calContain: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 0.85,
  },
  curriculumEntry: {
    flexDirection: 'row',
  },
  datePicker: {},
});

export default AddDemandScreen;
