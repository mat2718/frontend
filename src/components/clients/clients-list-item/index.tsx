import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { listStyles } from '../../../styles';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../App';

interface IProps {
  clientname: string;
  clientid: number;
}

/**
 * Client List Item - displays each individual client on the Client Screen
 * @param {IProps} props - properties for a client
 * @returns {React.FC} - react component that navigates from Client to ViewClient upon press
 * @author Matthew Otto and Oriel Red Oral
 */

const ClientsListItem: React.FC<IProps> = (props: IProps) => {
  /** Navigation */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  const demandsState = useSelector((state: RootStore) => state.demands);
  const demands = demandsState.filter(
    (demand) => demand.clientid === props.clientid
  );

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
        navigation.navigate('ViewClient', {
          clientid: props.clientid,
          clientname: props.clientname,
        });
      }}
    >
      <Text style={listStyles.heading}>{props.clientname}</Text>
      <Text style={listStyles.textRegular}>{demands.length + ' demands'}</Text>
    </TouchableOpacity>
  );
};

export default ClientsListItem;
