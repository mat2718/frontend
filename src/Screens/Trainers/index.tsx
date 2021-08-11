import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import TrainerListHeader from '../../Components/trainers/TrainerListHeader';
import { screenStyles, listStyles } from '../../styles';
import TrainersListItem from '../../Components/trainers/TrainersListItem';
/**
 * Authors: Joab Smith and Imran Ilyas
 **/

interface ITrainer {
  name: string;
  ID: string;
}

const MainTrainer: React.FC<ITrainer> = () => {
  const [trainerArr, setTrainerArr] = useState<ITrainer[]>([]);
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  const str = [
    { name: 'Johnathan Jingles', ID: '87654' },
    { name: 'chup', ID: '87774' },
  ];

  /** Main item to render for the FlatList */
  const renderItem = ({ item }: { item: any }) => {
    return <TrainersListItem name={item.name} id={item.ID} />;
  };

  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      <FlatList
        data={str}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID}
        ListHeaderComponent={TrainerListHeader}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  item: {
    flex: 1,
    padding: '3%',
    marginTop: '2%',
    marginHorizontal: '2%',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#F26925',
    borderRadius: 20,
  },

  trainer: {
    fontSize: 26,
    color: 'white',
  },
});

export default MainTrainer;
