import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { screenStyles } from '../../styles';
import ClientsListHeader from '../../components/clients/clients-list-header';
import ClientsListItem from '../../components/clients/clients-list-item';

/** Mock Data - PreRedux */
export const data = ['Cognizant', 'Revature', 'Matts BBQ'];

/** Basis for Entire Batch Screen */
const Clients: React.FC = () => {
  /** Main item to render for the FlatList */
  const renderItem = ({ item }: { item: any }) => {
    return <ClientsListItem client={item} />;
  };

  /** Main return statement */
  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      {/** List of clients
       * Takes in the picker filter value and updates accordingly
       */}

      <FlatList
        data={data.sort((a, b) => (a > b ? 1 : -1))}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        ListHeaderComponent={ClientsListHeader}
      />
    </SafeAreaView>
  );
};

export default Clients;
