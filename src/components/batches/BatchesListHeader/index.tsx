import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../../types';

import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BatchStats from '../BatchStats';
import { screenStyles, textStyles, buttonStyles } from '../../../styles';

/** We pass the filter state from the Batches screen to this component */
interface IProps {
  selectedFilter: any;
  setSelectedFilter: any;
}

const BatchesListHeader: React.FC<IProps> = (props: IProps) => {
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  return (
    <View style={screenStyles.mainView}>
      {/** Screen title */}
      <View style={screenStyles.titleContainer}>
        <Text style={textStyles.heading}>Batches</Text>

        {/** Add batch button */}
        <TouchableOpacity
          style={buttonStyles.buttonContainer}
          testID='button'
          onPress={() => navigation.navigate('AddEditBatch')}
        >
          <Text style={buttonStyles.buttonText}>Add Batch</Text>
        </TouchableOpacity>
      </View>

      {/** Gantt Chart */}
      <View style={styles.plannedBatchesTable}>
        <BatchStats data={[47, 7, 10, 20]} />
      </View>

      {/** FlatList title text */}
      <View style={screenStyles.titleContainer}>
        <Text style={textStyles.subHeading}>
          {props.selectedFilter.charAt(0).toUpperCase() +
            props.selectedFilter.slice(1)}{' '}
          batches
        </Text>

        {/** Picker filter for the FlatList */}
        <Picker
          selectedValue={props.selectedFilter}
          onValueChange={(itemValue: any, itemIndex: any) =>
            props.setSelectedFilter(itemValue)
          }
          style={{ height: 50, width: 50 }}
        >
          <Picker.Item label='All Batches' value='all' />
          <Picker.Item label='Active Batches' value='active' />
          <Picker.Item label='Upcoming Batches' value='upcoming' />
          <Picker.Item label='Completed Batches' value='completed' />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  plannedBatchesTable: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: '90%',
    backgroundColor: '#fafafa',
    borderRadius: 25,
  },
});

export default BatchesListHeader;
