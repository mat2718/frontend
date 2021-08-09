import { Picker } from '@react-native-picker/picker';
import React, {useState} from 'react'
import {Text, View, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, TextInput, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import axios from 'axios'
/**
 * Authors: Joab Smith and Imran Ilyas
**/
const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [selectedValue, setSelectedValue] = useState('Search By');
    const searched = () => {
        return('searching for a trainer');
    }
    return(
        <View style={styles.container}>
            <View style={styles.row} >

            <Picker
                selectedValue={selectedValue}
                style={styles.dropdown}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue)}}
                    >
                <Picker.Item label='First Name' value='Fname' />
                <Picker.Item label = 'Last Name' value = 'Lname' />
                    <Picker.Item label='ID' value='id' />
                    <Picker.Item label='ALL' value='All'/>
            </Picker>

            {/* </View>
            <View style={styles.row}> */}

            <TextInput style = {styles.searchBar} placeholder='Search Trainers' onChangeText={setSearch}>{search}</TextInput>
            {/* <SearchIcon style = {styles.searchIcon}/> */}
            <TouchableOpacity onPress={searched}>
                <MaterialCommunityIcons name="magnify" color={'grey'} size={30} />
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    },
    dropdown: {
        width: '41%',
    },
    row: {
        width: '100%',
        flexDirection: 'row',
    },
    searchBar: {
        width: '49%'
    },
    searchIcon: {},
})

export default SearchBar;