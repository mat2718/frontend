import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { screenStyles } from '../../styles';
import ClientsListHeader from '../../components/clients/clients-list-header';
import ClientsListItem from '../../components/clients/clients-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../App';
import { getAllClients } from '../../redux/actions/client-actions';

/**
 * Main Client Screen - displays both the header and list client components
 * @returns {React.FC} - react component that renders a FlatList of clients
 * @author Oriel Red Oral
 */

/** Basis for Entire Batch Screen */
const Clients: React.FC = () => {
  const [isFetching, setIsFetching] = React.useState(false);
  const dispatch = useDispatch();

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

  /** fetch updated data for refresh function */
  const fetchData = () => {
    dispatch(getAllClients());
    setIsFetching(false);
  };

  /** refresh function for flatlist */
  const onRefresh = () => {
    setIsFetching(true);
    fetchData();
  };

  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      {/** List of clients
         * Takes in the picker filter value and updates accordingly
      */}

      <FlatList
        onRefresh={onRefresh}
        refreshing={isFetching}
        data={clients}
        renderItem={renderItem}
        keyExtractor={(item) => item.clientid.toString()}
        ListHeaderComponent={ClientsListHeader}
      />
    </SafeAreaView>
  );
};

export default Clients;
