import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import BatchListItem from '../../components/batches/BatchListItem';
import { screenStyles } from '../../styles';
import ClientsListHeader from '../../components/clients/ClientsListHeader';
import ClientsListItem from '../../components/clients/ClientsListItem';

/** Mock Data - PreRedux */
export const data = [
  {
    client: 'Cognizant',
    demand: ['React', 'React Native', 'AWS'],
    needBy: Date.now(),
    quantityDemanded: 25,
  },
  {
    client: 'Walmart',
    demand: ['React', 'React Native', 'AWS'],
    needBy: Date.now(),
    quantityDemanded: 25,
  },
  {
    client: 'Revature',
    demand: ['React', 'React Native', 'AWS'],
    needBy: Date.now(),
    quantityDemanded: 25,
  },
];

/** Basis for Entire Batch Screen */
const Clients: React.FC = () => {
  /** Main item to render for the FlatList */
  const renderItem = ({ item }: { item: any }) => {
    return (
      <ClientsListItem
        client={item.client}
        demand={item.demand}
        needBy={item.needBy}
        quantityDemanded={item.quantityDemanded}
      />
    );
  };

  /** Main return statement */
  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      {/** List of clients
       * Takes in the picker filter value and updates accordingly
       */}

      <FlatList
        data={data.sort((a, b) => (a.client > b.client ? 1 : -1))}
        renderItem={renderItem}
        keyExtractor={(item) => item.client}
        ListHeaderComponent={ClientsListHeader}
      />
    </SafeAreaView>
  );
};

export default Clients;
