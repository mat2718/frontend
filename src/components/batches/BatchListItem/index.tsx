import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { listStyles, badgesStyles } from '../../../styles';

interface IProps {
  associate: number;
  batchId: number;
  curriculum: string;
  trainer: string;
  startDate: number;
  endDate: number;
}

const BatchListItem: React.FC<IProps> = (props: IProps) => {
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  /**
   * Touchable Link to contain individual Batch information.
   * Will lead to Individual Batch information
   */

  return (
    /** Individual Batch Touchable */

    /** Structures and displays the data from the FlatList */
    <TouchableOpacity
      style={listStyles.listItemContainer}
      onPress={() => {
        navigation.navigate('ViewBatch', props);
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={listStyles.heading}>
          {props.batchId + ' ' + props.curriculum}
        </Text>
        {/** Checks current date and start/end date of batch and applies tag based on status */}
        {props.startDate < Date.now() && props.endDate > Date.now() ? (
          <View style={[badgesStyles.badge, { backgroundColor: '#f26925' }]}>
            <Text style={badgesStyles.badgeText}>Active</Text>
          </View>
        ) : props.endDate < Date.now() ? (
          <View style={[badgesStyles.badge, { backgroundColor: '#25F269' }]}>
            <Text style={badgesStyles.badgeText}>Completed</Text>
          </View>
        ) : props.startDate > Date.now() ? (
          <View style={[badgesStyles.badge, { backgroundColor: '#474C55' }]}>
            <Text style={badgesStyles.badgeText}>Upcoming</Text>
          </View>
        ) : null}
        {/** End of date checker */}
      </View>

      <Text style={listStyles.subHeading}>{props.trainer}</Text>
      <Text style={listStyles.textRegular}>
        {new Date(props.startDate).toDateString() +
          '\nto ' +
          new Date(props.endDate).toDateString()}
      </Text>
    </TouchableOpacity>
  );
};

export default BatchListItem;
