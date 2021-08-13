import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import ITrainer from '../../../entities/Trainer';
import { getAllTrainers } from '../../../redux/actions/trainers-actions';
import { IAppState } from '../../../redux/state';
/**
 * Authors: Joab Smith and Imran Ilyas
 **/

interface IProps {
  setTrainer: (trainerArr: ITrainer[]) => void;
}
const SearchBar: React.FC<IProps> = (props: IProps) => {
  const [search, setSearch] = useState(''); // Search text
  const [selectedValue, setSelectedValue] = useState('Search By'); //Search catagory
  const dispatch = useDispatch();
  const trainers:ITrainer[] = useSelector((state: IAppState) =>
  {
    return state.trainers;
  })
  const searched = () => {
    //call all trainers
    dispatch(getAllTrainers());
    switch (selectedValue) {
      case 'ALL':
        props.setTrainer(trainers);
        break;
      case 'Fname':
        props.setTrainer(trainers.filter((trainer) =>
         trainer.trainerfirst.startsWith(search)
        )
        );
        break;
      case 'Lname':
        props.setTrainer(trainers.filter((trainer) =>
         trainer.trainerlast.startsWith(search)
        ));
        break;
      default:
        props.setTrainer(trainers);

    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Picker
          selectedValue={selectedValue}
          style={styles.dropdown}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
          }}
        >
          <Picker.Item label='ALL' value='All' />
          <Picker.Item label='First Name' value='Fname' />
          <Picker.Item label='Last Name' value='Lname' />
        </Picker>

        {/* </View>
            <View style={styles.row}> */}

        <TextInput
          style={styles.searchBar}
          placeholder='Search Trainers'
          onChangeText={setSearch}
        >
          {search}
        </TextInput>
        {/* <SearchIcon style = {styles.searchIcon}/> */}
        <TouchableOpacity onPress={searched}>
          <MaterialCommunityIcons name='magnify' color={'grey'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  dropdown: {
    width: '41%',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
  },
  searchBar: {
    width: '49%',
  },
  searchIcon: {},
});

export default SearchBar;
