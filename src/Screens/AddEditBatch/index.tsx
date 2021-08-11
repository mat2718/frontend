import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../Components/batches/Header';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  screenStyles,
  textStyles,
  inputStyles,
  colors,
  buttonStyles,
} from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

interface PropsI {
  route: {
    params?: {
      batchId: number;
      curriculum: string;
      trainer: string;
      associates: number;
      startDate: any;
      endDate: any;
    };
  };
}

/** Mock data for curriculum */
const dataCurricula = ['React Native/Cloud Native', 'Java', 'Python'];

/** Mock data for trainer */
const dataTrainer = ['Robert Connell', 'Matthew Otto', 'Red Oral'];

/** Main component screen */
const AddEditBatch: React.FC<PropsI> = ({ route }) => {
  /** States for Picker */
  const [selectedFilter, setSelectedFilter] = React.useState('all');
  const [isStartPickerShow, setIsStartPickerShow] = React.useState(false);
  /** States for Date Picker */
  const [startDate, setStartDate] = React.useState(new Date(Date.now()));
  const [endDate, setEndDate] = React.useState(new Date(Date.now()));
  const [isEndPickerShow, setIsEndPickerShow] = React.useState(false);
  /** Navigation for going back a screen */
  const navigation = useNavigation();

  /** Input listener for Start Date Picker */
  const onStartChange = (e: any, val: any) => {
    if (val) {
      setStartDate(val);
      setIsStartPickerShow(false);
    } else {
      setStartDate(new Date(Date.now()));
      setIsStartPickerShow(false);
    }
  };

  /** Input listener for End Date Picker */
  const onEndChange = (e: any, val: any) => {
    if (val) {
      setEndDate(val);
      setIsEndPickerShow(false);
    } else {
      setEndDate(new Date(Date.now()));
      setIsEndPickerShow(false);
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
          <Text style={textStyles.heading}>
            {route.params ? 'Edit Batch' : 'Add Batch'}
          </Text>
          {/** Add/Edit */}
          <TouchableOpacity
            style={buttonStyles.buttonContainer}
            onPress={() => navigation.goBack()}
          >
            <Text style={buttonStyles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        {/** Form view */}
        <View>
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
          {/** Trainer */}
          <Text style={inputStyles.inputLabelText}>Trainer</Text>
          <View style={inputStyles.pickerContainer}>
            <Picker
              selectedValue={selectedFilter}
              mode='dropdown'
              onValueChange={(itemValue: any, itemIndex: any) =>
                setSelectedFilter(itemValue)
              }
              style={{ width: '100%', height: 50 }}
            >
              {dataTrainer.map((curr) => {
                return <Picker.Item label={curr} value={curr} key={curr} />;
              })}
            </Picker>
          </View>
          {/** Associates */}
          <View style={{ flexDirection: 'column' }}>
            <Text style={inputStyles.inputLabelText}>Size</Text>
            <TextInput style={inputStyles.textInput} keyboardType='numeric' />
          </View>
          {/** Bottom Inputs Container */}
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}
          >
            {/** Start Date */}
            <View style={{ flexDirection: 'column' }}>
              <Text style={inputStyles.inputLabelText}>Start Date</Text>
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

            <View style={{ flexDirection: 'column' }}>
              <Text style={inputStyles.inputLabelText}>End Date</Text>
              <TouchableOpacity
                style={styles.dateView}
                onPress={() => setIsEndPickerShow(true)}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <MaterialCommunityIcons
                    name='calendar-export'
                    size={20}
                    color={colors.darkGray}
                  />
                  <Text style={styles.dateText}>{endDate.toDateString()}</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* The date picker */}
            {isEndPickerShow && (
              <DateTimePicker
                value={endDate}
                mode={'date'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={onEndChange}
                style={styles.datePicker}
              />
            )}
          </View>
        </View>
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

export default AddEditBatch;
