import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { ProgressChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  badgesStyles,
  screenStyles,
  textStyles,
  buttonStyles,
  colors,
} from '../../styles';
import { deleteBatch } from '../../redux/actions/batch-actions';
import BatchesSkillsListItem from '../../components/batches/batches-skills-list-item';

/**
 * View Batch - main component for the view batch screen
 * @param {IProps} interface - interface for component properties, includes batch, trainer, and curriculum information
 * @returns {React.FC} - main screen for viewing a batch when a batch is clicked on the list
 * @author Matthew Otto and Oriel Red Oral
 */

interface PropsI {
  route: {
    params: {
      batchSize: number;
      batchId: number;
      curriculum: {
        curriculumid: number;
        curriculumname: string;
        skillnamearr: [];
      };
      trainer: {
        trainerid: number;
        trainerfirst: string;
        trainerlast: string;
      };
      startDate: string;
      endDate: string;
      confirmed: boolean;
    };
  };
}

const ViewBatch: React.FC<PropsI> = ({ route }) => {
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();
  const dispatch = useDispatch();

  /** Dates for badge and prgoress ring */
  const startTime = new Date(route.params.startDate).getTime();
  const endTime = new Date(route.params.endDate).getTime();
  const progress = (Date.now() - startTime) / (endTime - startTime);

  /** Data for progress ring */
  const data = {
    labels: ['Progress'], // optional
    data: [progress < 1 && progress > 0 ? progress : progress < 0 ? 0 : 1],
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

  /** Delete batch function */
  const confirmDelete = () => {
    dispatch(deleteBatch(route.params.batchId));
    navigation.goBack();
  };

  /** Render item for flatlist */
  const renderItem = ({ item }: { item: any }) => {
    return <BatchesSkillsListItem skillname={item} />;
  };

  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      <View style={screenStyles.mainView}>
        {/**Title: Curriculum */}
        <View style={screenStyles.titleContainer}>
          {/** Touchable that takes us to the edit batch screen when clicking on the title */}
          <TouchableOpacity
            testID='editButton'
            onPress={() =>
              navigation.navigate('EditBatch', {
                batchid: route.params.batchId,
                batchsize: route.params.batchSize,
                trainerid: route.params.trainer.trainerid,
                curriculumid: route.params.curriculum,
                startdate: route.params.startDate,
                enddate: route.params.endDate,
              })
            }
            style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}
          >
            <Text style={textStyles.heading}>
              {route.params.curriculum.curriculumname + ' '}
              <MaterialCommunityIcons
                name='pencil'
                size={20}
                color={colors.darkGray}
              />
            </Text>
          </TouchableOpacity>

          {/** Confirm Button */}
          {route.params.confirmed ? (
            <TouchableOpacity
              style={buttonStyles.buttonDisabled}
              disabled={true}
            >
              <Text style={buttonStyles.buttonDisabledText}>
                Confirmed <MaterialCommunityIcons name='check' size={18} />
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={buttonStyles.buttonContainer}>
              <Text style={buttonStyles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          )}
        </View>
        {startTime < Date.now() && endTime > Date.now() ? (
          <View style={[badgesStyles.badge, { backgroundColor: '#f26925' }]}>
            <Text style={badgesStyles.badgeText}>Active</Text>
          </View>
        ) : startTime < Date.now() ? (
          <View style={[badgesStyles.badge, { backgroundColor: '#25F269' }]}>
            <Text style={badgesStyles.badgeText}>Completed</Text>
          </View>
        ) : endTime > Date.now() ? (
          <View style={[badgesStyles.badge, { backgroundColor: '#474C55' }]}>
            <Text style={badgesStyles.badgeText}>Upcoming</Text>
          </View>
        ) : null}
        {/**Subtitle: Trainer */}
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name='account-outline'
            size={16}
            color={colors.darkGray}
            style={{ marginRight: 5 }}
          />
          <Text style={textStyles.regular}>
            {route.params.trainer.trainerfirst +
              ' ' +
              route.params.trainer.trainerlast}
          </Text>
        </View>

        {/**Body: Batch information */}
        <View>
          {/**SubBody: Number of Associates */}
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons
              name='account-group-outline'
              size={16}
              color={colors.darkGray}
              style={{ marginRight: 5 }}
            />
            <Text style={textStyles.regular}>
              {route.params.batchSize} Associates
            </Text>
          </View>
          {/**SubBody: Start and End Date */}
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons
              name='calendar'
              size={16}
              color={colors.darkGray}
              style={{ marginRight: 5 }}
            />
            <Text style={textStyles.regular}>
              {new Date(route.params.startDate).toDateString() +
                '\nto ' +
                new Date(route.params.endDate).toDateString()}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text style={textStyles.subHeading}>Skills</Text>
        </View>

        {/** Skills list **/}
        <FlatList
          data={route.params.curriculum.skillnamearr}
          renderItem={renderItem}
          keyExtractor={(item: any) => item}
          style={{
            backgroundColor: colors.white,
            marginTop: 10,
            borderRadius: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        />

        {/** Progress Ring */}
        <View style={styles.progressRingView}>
          <ProgressChart
            data={data}
            width={50}
            height={40}
            strokeWidth={8}
            radius={12}
            chartConfig={chartConfig}
            hideLegend={true}
          />
          <Text style={styles.progressText}>
            {progress < 1 ? (data.data[0] * 100).toFixed(0) : 100}% Complete
          </Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={confirmDelete}>
          <Text style={styles.deleteButtonText}>Delete Batch</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

/** Local StyleSheet */
const styles = StyleSheet.create({
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

  deleteButton: {
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 15,
    borderColor: colors.orange,
  },

  deleteButtonText: {
    fontWeight: '700',
    color: colors.orange,
  },
});

export default ViewBatch;
