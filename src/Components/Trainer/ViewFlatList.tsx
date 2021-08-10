import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
/**
 * Authors: Joab Smith and Imran Ilyas
**/
interface IProps
{
    trainerArr:ITrainer[]
}

interface ITrainer
{
    name: string,
    ID: string
}



const ViewFlatList = (props: IProps) =>
{
    const navigator = useNavigation();
    const trainer = (item:ITrainer) => {
        navigator.navigate('ViewEditTrainer', {name: item.name, ID: item.ID})
    }
    return (
        <View style = {styles.container}>
            <FlatList
                data={props.trainerArr}
                renderItem={(item) => (
                        <View style={styles.row}>
                        
                        <TouchableOpacity style = {styles.item} onPress={() =>trainer(item.item)}>
                            <Text style = {styles.trainer}>{item.item.name}</Text>
                            <Text style = {styles.trainer}>ID#{item.item.ID}</Text>
                        </TouchableOpacity>
                        </View>
                )}
                keyExtractor={item => item.ID}>

            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        
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
})

export default ViewFlatList;