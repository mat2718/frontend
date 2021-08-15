import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { listStyles, colors } from '../../../styles';

/**
 * Batch Skills List Item - the component the batches skuill list uses to render on renderItem()
 * @param {IProps} interface - includes skillname for the batch to be rendered on a flatlist
 * @returns {React.FC} - React Component for the ViewBatch skills FlatList
 * @author Oriel Red Oral
 */

interface IProps {
  skillname: string;
}

const BatchesSkillsListItem: React.FC<IProps> = (props: IProps) => {
  return (
    /** Literally just renders the skill name with fancy padding */
    <View style={styles.listItemContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={listStyles.heading}>{props.skillname}</Text>
        </View>
      </View>
    </View>
  );
};

/** Local StyleSheet */
const styles = StyleSheet.create({
  listItemContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: colors.screenBg,
    borderRadius: 25,
  },

  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  dateView: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    height: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 5,
  },

  dateText: {
    color: colors.darkGray,
    paddingLeft: 5,
  },
});

export default BatchesSkillsListItem;
