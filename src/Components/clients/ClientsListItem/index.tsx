import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../types';
import { listStyles } from '../../../styles';

interface IProps {
  client: string;
  demand: [];
  needBy: number;
  quantityDemanded: number;
}

const ClientsListItem: React.FC<IProps> = (props: IProps) => {
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
        navigation.navigate('ViewClient', props);
      }}
    >
      <Text style={listStyles.heading}>{props.client}</Text>
      <Text style={listStyles.textRegular}>
        {props.quantityDemanded +
          ' needed by ' +
          new Date(props.needBy).toDateString()}
      </Text>
    </TouchableOpacity>
  );
};

export default ClientsListItem;
