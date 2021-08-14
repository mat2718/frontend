import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { listStyles, colors } from '../../../styles';
import ITrainer from '../../../Entities/Trainer';
import { useState } from 'react';

interface IProps
{
  trainer: ITrainer
}

/**
 * Trainer FlatList - a sub-component of the Main Trainer Screen that displays a list of trainers
 * @param {IProps} interface - properties of the entity trainer 
 * @returns {React.FC} - React Component that returns a flatlist of trainers
 * @author Joab Smith and Imran Ilyas
 */

const TrainersListItem: React.FC<IProps> = (props: IProps) =>
{
  // Navigation setup
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();
  const [selectedFilter, setSelectedFilter] = React.useState('');

  // Delete Trainer Action Handler call
  const deleteTrainer = (trainer: ITrainer) =>
  {
    console.log('Delete');
    //Update Redux
    //Axios Request
  }

  // Navigate to Edit Trainer page
  const editTrainer = () => {
    navigation.navigate('ViewEditTrainer', props.trainer);
  }

  return (
    // Structures and displays the data from the FlatList
    <View style={listStyles.listItemContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={listStyles.heading}>{props.trainer.trainerfirst + ' ' + props.trainer.trainerlast}</Text>
        {/* Dropdown for selecting edit or delete trainer */}
        <Picker
            mode='dropdown'
            selectedValue={selectedFilter}
            // Will need to extract the ternary because it is a code smell
          onValueChange={(itemValue, itemIndex) => {
            itemValue === 'Edit' ? navigation.navigate('ViewEditTrainer', props.trainer) :
            itemValue === 'Delete' ? deleteTrainer(props.trainer) : null
          }}
            style={{ width: 50 }}
        >
          <Picker.Item label='' enabled={false} value='default' style={{opacity: 0, height: 0 }}/>
          <Picker.Item label="Edit" value="Edit" />
          <Picker.Item label="Delete" value="Delete" />
        </Picker>
      </View>
      <Text style={listStyles.textRegular}>{'Email: ' + props.trainer.email}</Text>
      </View>
  );
};

export default TrainersListItem;
