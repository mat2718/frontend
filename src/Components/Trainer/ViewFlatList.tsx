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
        <View>
            <FlatList
                data={props.trainerArr}
                renderItem={(item) => (
                    
                        <TouchableOpacity style = {styles.item} onPress={trainer}>
                            <Text>{item.item.name}</Text>
                        </TouchableOpacity>
                )}
                keyExtractor={item => item.ID}>

            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        
    }
})

export default ViewFlatList;