import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../../component/Header/Header';
import BatchStats from '../../component/BatchStats';
import BatchListItem from '../../component/BatchListItem';

// mock data for flatlist
export const data = [
  {
    associate: 25,
    batchId: 0,
    curriculum: 'Cat Skinning/Cloud Native',
    trainer: 'Robert Connell',
    startDate: 1622505600000,
    endDate: 1627776000000,
  },
  {
    associate: 25,
    batchId: 0,
    curriculum: 'Among Us',
    trainer: 'Matthew Otto',
    startDate: 1627862400000,
    endDate: 1633046400000,
  },
  {
    associate: 25,
    batchId: 0,
    curriculum: 'Dying of "Natural Causes"',
    trainer: 'Red Oral',
    startDate: 1633132800000,
    endDate: 1638316800000,
  },
];

const Batches: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = React.useState('all');

  const plannedBatchesTable = () => {
    return (
      <>
        {/** Screen title */}
        <View style={styles.titleContainer}>
          <Text style={styles.screenTitle}>Batches</Text>
          {/** Add batch button */}
          <TouchableOpacity style={styles.addBatchButton}>
            <Text style={styles.addBatchText}>Add batch</Text>
          </TouchableOpacity>
        </View>
        {/** Gantt Chart */}
        <View style={styles.plannedBatchesTable}>
          <BatchStats data={[47, 7, 10, 20]} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.screenTitle}>
            {selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}{' '}
            batches
          </Text>
          <Picker
            selectedValue={selectedFilter}
            onValueChange={(itemValue: any, itemIndex: any) =>
              setSelectedFilter(itemValue)
            }
            style={{ height: 50, width: 75 }}
          >
            <Picker.Item label='All Batches' value='all' />
            <Picker.Item label='Active Batches' value='active' />
            <Picker.Item label='Upcoming Batches' value='upcoming' />
            <Picker.Item label='Completed Batches' value='completed' />
          </Picker>
        </View>
      </>
    );
  };

  // renderItem
  const renderItem = ({ item }: { item: any }) => {
    return (
      <BatchListItem
        associate={item.associate}
        batchId={item.batchId}
        curriculum={item.curriculum}
        trainer={item.trainer}
        startDate={item.startDate}
        endDate={item.endDate}
      />
    );
  };

  // Main return
  return (
    <SafeAreaView style={{ backgroundColor: '#fafafa', flex: 1 }}>
      {/** Header */}
      <Header />
      {/** List of batches */}
      <FlatList
        data={
          selectedFilter === 'active'
            ? data.filter(
                (date) =>
                  date.startDate < Date.now() && date.endDate > Date.now()
              )
            : selectedFilter === 'upcoming'
            ? data.filter((date) => date.startDate > Date.now())
            : selectedFilter === 'completed'
            ? data.filter((date) => date.endDate < Date.now())
            : data
        }
        renderItem={renderItem}
        keyExtractor={(item) => item.curriculum}
        ListHeaderComponent={plannedBatchesTable}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#474c55',
  },

  screenSubTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#474c55',
  },

  plannedBatchesTable: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    width: '90%',
    backgroundColor: '#fafafa',
    borderRadius: 25,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },

  addBatchButton: {
    justifyContent: 'center',
    height: 40,
    width: 100,
    backgroundColor: '#f26925',
    borderRadius: 50,
    marginLeft: 10,
  },

  addBatchText: {
    fontWeight: '700',
    color: '#ffffff',
    alignSelf: 'center',
  },
});

export default Batches;
