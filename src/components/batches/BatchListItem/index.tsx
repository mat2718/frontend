import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface PropsI {
  associate: number;
  batchId: number;
  curriculum: string;
  trainer: string;
  startDate: number;
  endDate: number;
}

const BatchListItem: React.FC<PropsI> = (props: PropsI) => {
  /**
   * Touchable Link to contain individual Batch information.
   * Will lead to Individual Batch information
   */

  return (
    /** Individual Batch Touchable */
    /** Structures and displays the data from the FlatList */
    <TouchableOpacity style={styles.batchListprops} onPress={jest.fn}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.curriculumText}>{props.curriculum}</Text>
        {/** Checks current date and start/end date of batch and applies tag based on status */}
        {props.startDate < Date.now() && props.endDate > Date.now() ? (
          <View style={[styles.badge, { backgroundColor: '#f26925' }]}>
            <Text style={styles.badgeText}>Active</Text>
          </View>
        ) : props.endDate < Date.now() ? (
          <View style={[styles.badge, { backgroundColor: '#25F269' }]}>
            <Text style={styles.badgeText}>Completed</Text>
          </View>
        ) : props.startDate > Date.now() ? (
          <View style={[styles.badge, { backgroundColor: '#474C55' }]}>
            <Text style={styles.badgeText}>Upcoming</Text>
          </View>
        ) : null}
        {/** End of date checker */}
      </View>

      <Text style={styles.trainerText}>{props.trainer}</Text>
      <Text style={styles.dateText}>
        {new Date(props.startDate).toDateString() +
          '\n to ' +
          new Date(props.endDate).toDateString()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  batchListprops: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 30,
    marginBottom: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },

  curriculumText: {
    fontWeight: '700',
    fontSize: 14,
    color: '#474C55',
  },

  trainerText: {
    fontWeight: '700',
    fontSize: 12,
    color: '#474C55',
  },

  dateText: {
    fontSize: 12,
    color: '#474C55',
  },

  badge: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    padding: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },

  badgeText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 10,
  },
});

export default BatchListItem;
