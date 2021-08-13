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

const TrainersListItem: React.FC<IProps> = (props: IProps) =>
{
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();
  const [selectedFilter, setSelectedFilter] = React.useState('');

  const deleteTrainer = (trainer: ITrainer) =>
  {
    console.log('Delete');
    //Update Redux
    //Axios Request
  }
const editTrainer = () => {
  navigation.navigate('ViewEditTrainer', props.trainer);
}


// itemValue, itemIndex) =>
//               {
//                 setSelectedFilter(itemValue);
//                 if (selectedFilter === 'Edit') {
//                   navigation.navigate('ViewEditTrainer', props.trainer);
//                 } else if (selectedFilter === 'Delete') {
//                   deleteTrainer(props.trainer);
//                 }
//               }   

  return (
    /** Individual Trainer Touchable */
    /** Structures and displays the data from the FlatList */
    <View style={listStyles.listItemContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={listStyles.heading}>{props.trainer.trainerfirst + ' ' + props.trainer.trainerlast}</Text>
        <Picker
            mode='dropdown'
            selectedValue={selectedFilter}
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
