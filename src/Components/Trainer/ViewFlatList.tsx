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

const trainer = () => {
    return('nothing');
}

const ViewFlatList = (props:IProps) => {
    return (
        <View style = {styles.container}>
            <FlatList
                data={props.trainerArr}
                renderItem={(item) => (
                        <View style={styles.row}>
                        
                        <TouchableOpacity style = {styles.item} onPress={trainer}>
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
        margin: "10%",
        
    },
    row: {
    flex: 1,
        flexDirection: 'row',
      
    },
    
    item: {
        flex: 1,
        padding: '3%',
        width: '100%',
        //flexDirection: 'row',
        
        borderWidth:1
    },

    trainer: {
        fontSize: 26,
    },
})

export default ViewFlatList;