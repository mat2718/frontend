import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { screenStyles } from '../../styles';
import ClientsListHeader from '../../components/clients/clients-list-header';
import ClientsListItem from '../../components/clients/clients-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../App';

/** Basis for Entire Batch Screen */
const Clients: React.FC = () => {
  /** Main item to render for the FlatList */
  const renderItem = ({ item }: { item: any }) => {
    return (
      <ClientsListItem clientname={item.clientname} clientid={item.clientid} />
    );
  };

  /** Get clients from store */
  const clients = useSelector((state: RootStore) => state.clients).sort(
    (a, b) => (a.clientname > b.clientname ? 1 : -1)
  );

  /** Main return statement */
  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      {/** List of clients
       * Takes in the picker filter value and updates accordingly
       */}

      <FlatList
        data={clients}
        renderItem={renderItem}
        keyExtractor={(item) => item.clientid.toString()}
        ListHeaderComponent={ClientsListHeader}
      />
    </SafeAreaView>
  );
};

export default Clients;
