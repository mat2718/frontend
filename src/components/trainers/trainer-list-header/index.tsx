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
  container: {
    flex: 1,
    marginBottom: 20,
  },
  searchBar: {
    height: '20%',
  },
  flatlist: {
    flex: 1,
  },
  header: {
    fontSize: 24,
  },
  add: {
    height: '8%',
    alignSelf: 'flex-start',
    backgroundColor: '#F26925',
    borderRadius: 100,
    padding: '4%',
    justifyContent: 'center',
    //margin: '10%',
  },
  addText: {
    //textAlign: 'center',
    color: 'white',
  },
});

export default TrainerListHeader;
