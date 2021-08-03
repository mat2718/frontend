import React from 'react';
import {FlatList, TextInput, View, Text} from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      skill: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      skill: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      skill: 'Third Item',
    },
  ];

const EditingModal = () => {    
    const renderItem = ({item}) => {
        <Text>{item.skill}</Text>
    }

    return (
        <View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
}