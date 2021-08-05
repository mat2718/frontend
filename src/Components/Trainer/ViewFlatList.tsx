import React from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';

interface IProps
{
    trainerArr: string[]
}


const ViewFlatList = (props:IProps) => {
    return (
        <View>
            <FlatList
                data={props.trainerArr}
                renderItem={(item) => (
                    <View>
                        <TouchableOpacity>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                </View>
            )}>

            </FlatList>
        </View>
    );
}

export default ViewFlatList;