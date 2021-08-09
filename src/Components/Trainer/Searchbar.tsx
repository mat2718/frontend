import React, {useState} from 'react'
import {Text, View, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, TextInput, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import axios from 'axios'
/**
 * Authors: Joab Smith and Imran Ilyas
**/
const SearchBar = () => {
    const [search, setSearch] = useState('');
    const searched = () => {
        return('searching for a trainer');
    }
    return(
        <View style = {styles.container}>
            <TextInput style = {styles.searchBar} placeholder='Search Trainers' onChangeText={setSearch}>{search}</TextInput>
            {/* <SearchIcon style = {styles.searchIcon}/> */}
            <TouchableOpacity onPress={searched}>
                <MaterialCommunityIcons name="magnify" color={'grey'} size={30} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    searchBar: {},
    searchIcon: {},
})

export default SearchBar;