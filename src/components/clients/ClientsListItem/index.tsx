import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { listStyles } from '../../../styles';

interface IProps {
  client: string;
}

const ClientsListItem: React.FC<IProps> = (props: IProps) => {
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  /** We must fetch demand data from the client id */
  /** Mock data for now */
  const demands = [
    {
      client: 'Revature',
      curriculum: 'React',
      needby: Date.now(),
      quantitydemanded: 25,
    },
    {
      client: 'Revature',
      curriculum: 'React Native',
      needby: Date.now(),
      quantitydemanded: 25,
    },
    {
      client: 'Revature',
      curriculum: 'AWS',
      needby: Date.now(),
      quantitydemanded: 25,
    },
    {
      client: 'Matts BBQ and Foot Massage',
      curriculum: 'Cooking',
      needby: Date.now(),
      quantitydemanded: 25,
    },
    {
      client: 'Matts BBQ and Foot Massage',
      curriculum: 'Foot Massaging',
      needby: Date.now(),
      quantitydemanded: 25,
    },
    {
      client: 'Cognizant',
      curriculum: 'React',
      needby: Date.now(),
      quantitydemanded: 25,
    },
  ];

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
        {demands.filter((item) => item.client === props.client).length +
          ' demands'}
      </Text>
    </TouchableOpacity>
  );
};

export default ClientsListItem;
