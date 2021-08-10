import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from '../components/Trainer/Searchbar';
import { useNavigation } from '@react-navigation/native';
import { colors, screenStyles, textStyles, buttonStyles } from '../styles';

interface PropsI {
  setTrainerArr: any;
  trainerArray: any;
}

const TrainerListHeader: React.FC<PropsI> = (props: PropsI) => {
  const navigation = useNavigation();

  const addTrainer = () => {
    navigation.navigate('AddTrainer');
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginBottom: 20,
          justifyContent: 'space-between',
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
