import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import SearchBar from '../components/Trainer/Searchbar';
import ViewFlatList from '../components/Trainer/ViewFlatList';
import TrainerListHeader from './TrainerListHeader';
import {
  colors,
  screenStyles,
  textStyles,
  buttonStyles,
  listStyles,
} from '../styles';
/**
 * Authors: Joab Smith and Imran Ilyas
 **/

interface ITrainer {
  name: string;
  ID: string;
}

const MainTrainer = () => {
  const [trainerArr, setTrainerArr] = useState<ITrainer[]>([]);
  const navigation = useNavigation();
  const str = [
    { name: 'Johnathan Jingles', ID: '87654' },
    { name: 'chup', ID: '87774' },
  ];

  return (
    <View style={styles.container}>
      <View style={screenStyles.mainView}>
        <FlatList
          data={str}
          renderItem={(item) => (
            <View style={styles.row}>
              <TouchableOpacity
                style={listStyles.listItemContainer}
                onPress={() =>
                  navigation.navigate('ViewEditTrainer', { ID: item.item.ID })
                }
              >
                <Text style={listStyles.heading}>{item.item.name}</Text>
                <Text style={listStyles.subHeading}>ID#{item.item.ID}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.ID}
          ListHeaderComponent={TrainerListHeader}
        ></FlatList>
      </View>
    </View>
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
