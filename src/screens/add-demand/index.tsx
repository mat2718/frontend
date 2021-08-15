import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import axios from '../../../axiosConfig';
import { addDemand } from '../../redux/actions/demand-actions';

interface PropsI {
  route: {
    params: {
      clientid: number;
      clientname: string;
    };
  };
}

const AddDemand: React.FC<PropsI> = ({ route }) => {
  /** Navigation for going back a screen */
  const [howMany, setHowMany] = useState(0);
  const [curricula, setCurricula] = React.useState([
    {
      curriculumname: '',
      curriculumid: 0,
    },
  ]);
  const [curriculaValue, setCurriculaValue] = React.useState(
    curricula[0].curriculumid
  );
  const [isStartPickerShow, setIsStartPickerShow] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date(Date.now()));

  /** Dispatch and navigation hooks */
  const dispatch = useDispatch();
  const navigation = useNavigation();

  /** Get all curricula */
  const getAllCurricula = async () => {
    await axios.get(`curriculum`).then((item) => setCurricula(item.data));
  };
  /** Run get all curricula function */
  React.useEffect(() => {
    getAllCurricula();

    return function cleanup() {
      setCurricula([]);
    };
  }, []);

  const onStartChange = (e: any, val: any) => {
    if (val) {
      setStartDate(val);
      setIsStartPickerShow(false);
    } else {
      setStartDate(new Date(Date.now()));
      setIsStartPickerShow(false);
    }
  };

  const addDemandClick = () => {
    dispatch(
      addDemand({
        clientid: route.params.clientid,
        curriculumid: curriculaValue,
        needby: startDate.toISOString(),
        quantitydemanded: howMany,
      })
    );

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
          <Text style={textStyles.heading}>Add a Demand</Text>
          {/** Add/Edit */}
          <TouchableOpacity
            style={buttonStyles.buttonContainer}
            onPress={() => addDemandClick()}
          >
            <Text style={buttonStyles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        {/** Form view */}
        {/** Current client */}
        <View style={{ flexDirection: 'column' }}>
          <Text style={inputStyles.inputLabelText}>Current Client </Text>
          <Text style={inputStyles.textInput}>{route.params.clientname}</Text>
        </View>
        {/** Curriculum  */}
        <Text style={inputStyles.inputLabelText}>Curriculum</Text>
        {/** Picker Container */}
        <View style={inputStyles.pickerContainer}>
          <Picker
            selectedValue={curriculaValue}
            mode='dropdown'
            onValueChange={(itemValue: any, itemIndex: any) =>
              setCurriculaValue(itemValue)
            }
            style={{ width: '100%', height: 50 }}
          >
            {curricula.map((curr) => {
              return (
                <Picker.Item
                  label={curr.curriculumname}
                  value={curr.curriculumid}
                  key={curr.curriculumid}
                />
              );
            })}
          </Picker>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Text style={inputStyles.inputLabelText}>
            Enter # of Associates Needed{' '}
          </Text>
          <TextInput
            style={inputStyles.textInput}
            keyboardType='numeric'
            onChangeText={(value) => setHowMany(Number(value))}
          />
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
              <Text style={styles.dateText}>{startDate.toDateString()}</Text>
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
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  dateView: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '95%',
    padding: 10,
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
