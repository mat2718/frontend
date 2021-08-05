import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

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
                    
                        <TouchableOpacity style = {styles.item} onPress={trainer}>
                            <Text style = {styles.trainer}>{item.item.name}</Text>
                            <Text style = {styles.trainer}>{item.item.ID}</Text>
                        </TouchableOpacity>
                )}
                keyExtractor={item => item.ID}>

            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: "10%",
        justifyContent: 'center',
    },
    
    item: {
        marginVertical: '20%',
    },

    trainer: {
        fontSize: 26,
    },
})

export default ViewFlatList;