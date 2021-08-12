import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { listStyles, colors } from '../../../styles';
import { Picker } from '@react-native-picker/picker';

interface IProps {
  curriculum: string;
  needby: number;
  quantitydemanded: number;
}

const DemandsListItem: React.FC<IProps> = (props: IProps) => {
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

  /** States for Picker */
  const [selectedFilter, setSelectedFilter] = React.useState();

  /**
   * Touchable Link to contain individual Batch information.
   * Will lead to Individual Batch information
   */

  return (
    /** Individual Batch Touchable */

    /** Structures and displays the data from the FlatList */
    <View style={styles.listItemContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={listStyles.subHeading}>{props.curriculum}</Text>
          <Text style={listStyles.textRegular}>
            {props.quantitydemanded +
              ' needed by ' +
              new Date(props.needby).toDateString()}
          </Text>
        </View>
        {/** Dropdown menu */}
        <View>
          <Picker
            mode='dropdown'
            selectedValue={selectedFilter}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedFilter(itemValue)
            }
            style={{ width: 50 }}
          >
            <Picker.Item label='Edit demand' value='edit' />
            <Picker.Item label='Delete demand' value='delete' />
          </Picker>
        </View>
      </View>
    </View>
  );
};

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

export default DemandsListItem;
