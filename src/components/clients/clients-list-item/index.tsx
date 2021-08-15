import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { listStyles } from '../../../styles';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { getAllClients } from '../../../redux/actions/client-actions';
=======
import { getDemandByClientId } from '../../../redux/actions/demand-actions';
>>>>>>> 35e63a36562ee15337adb94d16173196063b75e3

interface IProps {
  clientname: string;
  clientid: number;
}
interface IClientList{
  clientid:number;
  clientname:string;
}
const ClientsListItem: React.FC<IProps> = (props: IProps) => {
  const [demands, setDemands] = React.useState([{}]);

  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  const fetchDemands = async () => {
    setDemands(await getDemandByClientId(props.clientid));
  };

  React.useEffect(() => {
    fetchDemands();

    return function cleanup() {
      setDemands([]);
    };
  }, []);







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
          demands: demands,
        });
      }}
    >
      <Text style={listStyles.heading}>{props.clientname}</Text>
      <Text style={listStyles.textRegular}>{demands.length + ' demands'}</Text>
    </TouchableOpacity>
  );
};

export default ClientsListItem;
