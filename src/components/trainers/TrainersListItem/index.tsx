import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { listStyles } from '../../../styles';
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


  const deleteTrainer = (trainer: ITrainer) =>
  {
    //Update Redux
    //Axios Request
  }


  return (
    /** Individual Trainer Touchable */
    /** Structures and displays the data from the FlatList */
    <TouchableOpacity
      style={listStyles.listItemContainer}
      onPress={() =>
      {
        navigation.navigate('ViewEditTrainer', props.trainer);
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text style={listStyles.heading}>{props.trainer.trainerfirst + ' ' + props.trainer.trainerlast}</Text>
        <Picker

          onValueChange={(itemValue, itemIndex) =>
          {
            if (itemValue === 'Edit') {
              navigation.navigate('ViewEditTrainer', props.trainer);
            } else if (itemValue === 'Delete') {
              deleteTrainer(props.trainer);
            }
          }
          }>
          <Picker.Item label="Edit" value="Edit" />
          <Picker.Item label="Delete" value="Delete" />
        </Picker>
      </View>
      <Text style={listStyles.textRegular}>{'Email: ' + props.trainer.email}</Text>
    </TouchableOpacity>
  );
};

export default TrainersListItem;
