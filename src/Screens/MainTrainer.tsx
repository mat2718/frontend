import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import{Text, StyleSheet, TouchableOpacity, View} from 'react-native'
import SearchBar from '../components/Trainer/Searchbar';
import ViewFlatList from '../components/Trainer/ViewFlatList';
/**
 * Authors: Joab Smith and Imran Ilyas
**/

interface ITrainer
{
    name: string,
    ID: string
}

const MainTrainer = () =>
{
    const [trainerArr, setTrainerArr] = useState<ITrainer[]>([])
    const navigation = useNavigation();
    const str = [{name: 'Johnathan Jingles', ID: '87654'}, {name: 'chup', ID: '87774'}]
    const addTrainer = () => {
        navigation.navigate('AddTrainer');
    }


    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <SearchBar setTrainer={setTrainerArr}/>
            </View>
            <View>
                <Text style = {styles.header}>Trainers Page</Text>
                <TouchableOpacity style = {styles.add} onPress = {addTrainer}>
                    <Text style = {styles.addText}>Add Trainer</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.flatlist}>
            <ViewFlatList trainerArr={str}/>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    searchBar: {
        height:'20%'
    },
    flatlist: {
        flex:1
    },
    header: {
        fontSize: 24,
    },
    add: {
        height: '8%',
        alignSelf:'flex-start',
        backgroundColor: "#F26925",
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

export default MainTrainer;