import React from 'react';
import axios from '../../../../axiosConfig';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { listStyles, badgesStyles } from '../../../styles';
import { RootStore } from '../../../../App';
import { useSelector } from 'react-redux';

/**
 * Batch List Item - the component the batches list uses to render on renderItem()
 * @param {IProps} interface - includes information for a batch to be rendered on a flatlist
 * @returns {React.FC} - React Component for the Batches FlatList, navigates to ViewBatch
 * @author Matthew Otto and Oriel Red Oral
 */

interface IProps {
  batchId: number;
  batchSize: number;
  curriculumId: number;
  trainerId: number;
  startDate: string;
  endDate: string;
  confirmed: boolean;
}

const BatchListItem: React.FC<IProps> = (props: IProps) => {
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  /** Get curriculum and uh trainer */
  const curriculumState = useSelector((state: RootStore) => state.curricula);
  const trainerState = useSelector((state: RootStore) => state.trainers);

  /** Set curriculum and trainer  */
  const curriculum = curriculumState.find(
    (item) => item.curriculumid === props.curriculumId
  );
  const trainer = trainerState.find(
    (item) => item.trainerid === props.trainerId
  );

  /** Dates */
  const startDate = new Date(props.startDate).getTime();
  const endDate = new Date(props.endDate).getTime();

  /**
   * Touchable Link to contain individual Batch information.
   * Will lead to Individual Batch information
   */

  return (
    /** Individual Batch Touchable */
    /** Structures and displays the data from the FlatList */
    <TouchableOpacity
      style={listStyles.listItemContainer}
      testID='viewBatchButton'
      onPress={() => {
        navigation.navigate('ViewBatch', {
          batchId: props.batchId,
          curriculum: {
            curriculumId: curriculum?.curriculumid,
            skillnamearr: curriculum?.skillnamearr,
          },
          trainerId: props.trainerId,
        });
      }}
    >
      {/** Badge */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={listStyles.heading}>{curriculum?.curriculumname}</Text>
        {/* * Checks current date and start/end date of batch and applies tag based on status */}
        {startDate <= Date.now() && endDate >= Date.now() ? (
          <View style={[badgesStyles.badge, { backgroundColor: '#f26925' }]}>
            <Text style={badgesStyles.badgeText}>Active</Text>
          </View>
        ) : endDate < Date.now() ? (
          <View style={[badgesStyles.badge, { backgroundColor: '#25F269' }]}>
            <Text style={badgesStyles.badgeText}>Completed</Text>
          </View>
        ) : startDate > Date.now() ? (
          <View style={[badgesStyles.badge, { backgroundColor: '#474C55' }]}>
            <Text style={badgesStyles.badgeText}>Upcoming</Text>
          </View>
        ) : null}
        {/** End of date checker */}
      </View>

      {/** Trainer name */}
      <Text style={listStyles.subHeading}>
        {trainer?.trainerfirst + ' ' + trainer?.trainerlast}
      </Text>
      {/** Start and end date */}
      <Text style={listStyles.textRegular}>
        {new Date(props.startDate).toDateString() +
          '\nto ' +
          new Date(props.endDate).toDateString()}
      </Text>
    </TouchableOpacity>
  );
};

export default BatchListItem;
