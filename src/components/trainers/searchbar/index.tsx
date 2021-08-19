import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import ITrainer from '../../../entities/Trainer';
import { getAllTrainers } from '../../../redux/actions/trainers-actions';
import { IAppState } from '../../../redux/state';
/**
 * Search Bar Component - a header component on the Main Trainer Screen using for filtering trainers
 * @param {IProps} interface - sets the properties of a trainer
 * @returns {React.FC} - displays a dropdown, textinput for a searchbar, and an icon for searching
 * @author Joab Smith and Imran Ilyas
 **/

interface IProps {
  setTrainer: (trainerArr: ITrainer[]) => void;
}

const SearchBar: React.FC<IProps> = (props: IProps) => {
  // hooks for the searchbar and the dropdown
  const [search, setSearch] = useState('');
  const [selectedValue, setSelectedValue] = useState('Search By');
  const navigation = useNavigation()
  const dispatch = useDispatch();
  // Action for handling the trainer when searching
  const trainers:ITrainer[] = useSelector((state: IAppState) =>
  {
    return state.trainers;
  })
  
  
  // Searches for trainers upon press and filters depending on the case
  const searched = () => {
    // Call all trainers
    switch (selectedValue) {
      case 'ALL':
        props.setTrainer(trainers);
        break;
      case 'Fname':
        props.setTrainer(trainers.filter((trainer) =>
         trainer.trainerfirst.startsWith(search)
         ));
        break;
      case 'Lname':
        props.setTrainer(trainers.filter((trainer) =>
         trainer.trainerlast.startsWith(search)
        ));
        break;
      default:
        props.setTrainer(trainers);
        break;

    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Dropdown */}
        <Picker
          selectedValue={selectedValue}
          style={styles.dropdown}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
          }}
        >
          {/* Dropdown items */}
          <Picker.Item label='ALL' value='All' />
          <Picker.Item label='First Name' value='Fname' />
          <Picker.Item label='Last Name' value='Lname' />
        </Picker>
        
        {/* Input for Searchbar */}
        <TextInput
          style={styles.searchBar}
          placeholder='Search Trainers'
          onChangeText={setSearch}
        >
          {search}
        </TextInput>
        {/* Search Icon */}
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
});

export default SearchBar;
