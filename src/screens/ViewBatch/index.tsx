import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { ProgressChart } from 'react-native-chart-kit';
import Header from '../../components/batches/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface PropsI {
  associate: number;
  batchId: number;
  curriculum: string;
  trainer: string;
  startDate: number;
  endDate: number;
}

const ViewBatch: React.FC<PropsI> = (props: PropsI) => {
  /** Date variables for the calendar component */
  const currentDate = new Date(Date.now()).toISOString().slice(0, 10);
  const startDate = new Date(props.startDate).toISOString().slice(0, 10);
  const endDate = new Date(props.endDate).toISOString().slice(0, 10);
  const progress =
    (Date.now() - props.startDate) / (props.endDate - props.startDate);

  /** Data for progress ring */
  const data = {
    labels: ['Progress'], // optional
    data: [progress < 1 ? progress : 1],
  };

  /** ChartConfig  */
  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(242, 110, 38, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ScrollView style={styles.viewBatchScreen}>
        {/**Title: Curriculum */}
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>
            {props.batchId + ' ' + props.curriculum}
          </Text>

          <TouchableOpacity style={styles.editBatchButton}>
            <Text style={styles.editBatchText}>Edit Batch</Text>
          </TouchableOpacity>
        </View>
        {props.startDate < Date.now() && props.endDate > Date.now() ? (
          <View style={[styles.badge, { backgroundColor: '#f26925' }]}>
            <Text style={styles.badgeText}>Active</Text>
          </View>
        ) : props.endDate < Date.now() ? (
          <View style={[styles.badge, { backgroundColor: '#25F269' }]}>
            <Text style={styles.badgeText}>Completed</Text>
          </View>
        ) : props.startDate > Date.now() ? (
          <View style={[styles.badge, { backgroundColor: '#474C55' }]}>
            <Text style={styles.badgeText}>Upcoming</Text>
          </View>
        ) : null}
        {/**Subtitle: Trainer */}
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name='account-outline'
            size={16}
            color='#222'
          />
          <Text style={styles.subText}>{props.trainer}</Text>
        </View>

        {/**Body: Batch information */}
        <View style={styles.subTextContainer}>
          {/**SubBody: Number of Associates */}
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons
              name='account-group-outline'
              size={16}
              color='#222'
            />
            <Text style={styles.subText}>{props.associate} Associates</Text>
          </View>
          {/**SubBody: Start and End Date */}
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name='calendar' size={16} color='#222' />
            <Text style={styles.subText}>
              {new Date(props.startDate).toDateString() +
                '\nto ' +
                new Date(props.endDate).toDateString()}
            </Text>
          </View>
        </View>

        {/**Calendar: Marked Start and End Dates */}
        <View style={styles.calendarView}>
          <Calendar
            current={currentDate}
            minDate={startDate}
            maxDate={endDate}
            markedDates={{
              [startDate]: {
                selected: true,
                marked: true,
                selectedColor: '#F26925',
              },
              [endDate]: {
                selected: true,
                marked: true,
                selectedColor: '#F26925',
              },
            }}
          />
        </View>
        {/** Progress Ring */}
        <View style={styles.progressRingView}>
          <ProgressChart
            data={data}
            width={80}
            height={40}
            strokeWidth={16}
            radius={12}
            chartConfig={chartConfig}
            hideLegend={true}
          />
          <Text style={styles.progressText}>
            {progress < 1 ? (data.data[0] * 100).toFixed(0) : 100}% Complete
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewBatchScreen: {
    padding: 25,
  },

  calendarView: {
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    width: '99%',
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },

  editBatchButton: {
    justifyContent: 'center',
    height: 40,
    width: 100,
    backgroundColor: '#f26925',
    borderRadius: 20,
  },

  editBatchText: {
    fontWeight: '700',
    color: '#ffffff',
    alignSelf: 'center',
  },

  mainTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  mainText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#474c55',
    flex: 0.9,
  },

  subText: {
    fontSize: 14,
    paddingLeft: 5,
  },

  subTextContainer: {
    justifyContent: 'center',
    marginTop: 2,
  },

  progressRingView: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    width: '98%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },

  progressText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#474c55',
  },

  badge: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 10,
    marginBottom: 5,
    overflow: 'hidden',
  },

  badgeText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 10,
  },
});

export default ViewBatch;
