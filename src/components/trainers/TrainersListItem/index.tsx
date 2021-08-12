import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { listStyles } from '../../../styles';

interface IProps {
  name: string;
  email: string;
}

const TrainersListItem: React.FC<IProps> = (props: IProps) => {
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  /**
   * Touchable Link to contain individual Batch information.
   * Will lead to Individual Batch information
   */

  return (
    /** Individual Clients Touchable */
    /** Structures and displays the data from the FlatList */
    <TouchableOpacity
      style={listStyles.listItemContainer}
      onPress={() => {
        navigation.navigate('ViewEditTrainer', props);
      }}
    >
      <Text style={listStyles.heading}>{props.name}</Text>
      <Text style={listStyles.textRegular}>{'Email: ' + props.email}</Text>
    </TouchableOpacity>
  );
};

export default TrainersListItem;
