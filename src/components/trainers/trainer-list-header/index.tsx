import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from '../searchbar';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { textStyles, buttonStyles, screenStyles } from '../../../styles';
import ITrainer from '../../../entities/Trainer';

interface PropsI {
  setTrainerArr: (trainers:ITrainer[]) => void;
}

/**
 * Main Trainerlist Header
 * @param
 * @returns
 * @author Joab Smith and Imran Ilyas
 */

const TrainerListHeader: React.FC<PropsI> = (props: PropsI) => {
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

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
          <TouchableOpacity
            style={buttonStyles.buttonContainer}
            onPress={addTrainer}
          >
            <Text style={buttonStyles.buttonText}>Add Trainer</Text>
          </TouchableOpacity>
        </View>
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
