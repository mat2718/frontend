import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from '../searchbar';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { textStyles, buttonStyles, screenStyles } from '../../../styles';
import ITrainer from '../../../entities/Trainer';

interface IProps {
  setTrainerArr: (trainers:ITrainer[]) => void;
}

/**
 * Main Trainerlist Header - displays the searchbar as well as the header and create trainer button
 * @param {IProps} interface - trainer array properties meant specifically for the searchbar
 * @returns {React.FC} - React Component for the Main Trainer Screen and has routing for the Add Trainer Screen
 * @author Joab Smith and Imran Ilyas
 */

const TrainerListHeader: React.FC<IProps> = (props: IProps) => {
  // Navigation setup
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  // Navigate to AddTrainer upon press
  const addTrainer = () => {
    navigation.navigate('AddTrainer');
  };

  return (
    <View style={screenStyles.safeAreaView}>
      <View style={screenStyles.mainView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}
        >
          <Text style={textStyles.heading}>Trainers</Text>
          {/* Add Trainer Button */}
          <TouchableOpacity
            style={buttonStyles.buttonContainer}
            onPress={addTrainer}
          >
            <Text style={buttonStyles.buttonText}>Add Trainer</Text>
          </TouchableOpacity>
        </View>
        {/* Searchbar */}
        <View style={styles.searchBar}>
          <SearchBar setTrainer={props.setTrainerArr} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: '20%',
  },
});

export default TrainerListHeader;
