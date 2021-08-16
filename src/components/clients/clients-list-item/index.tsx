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

const ClientsListItem: React.FC<IProps> = (props: IProps) => {
  /** Navigation stuff */
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
