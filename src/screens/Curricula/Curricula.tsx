import React, { useRef, useState } from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ExpandableList } from '../../components/curricula/components/ExpandableList';
import { Transitioning, Transition } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const Curricula2: React.FC = () => {
    //mock data for flatlist
    const DATA = [{
        'batches': [7, 9, 3],
        'createdBy': 'First Creator',
        'createdOn': "2021-08-03",
        'id': 0,
        'lastModified':	'First Creator',
        'lastModifiedBy': '2021-08-03',
        'name':	'Curriculum 1',
        'skills': ["JS", "TS", "React", "React-Native"]
    },
    {
        'batches': [1, 2, 3],
        'createdBy': 'Second Creator',
        'createdOn': "2021-08-03",
        'id': 0,
        'lastModified': 'Second Creator'	,
        'lastModifiedBy': '2021-08-03',
        'name':	'Curriculum 2',
        'skills': ["JS", "TS", "React", "React-Native"]
    },
    {
      'batches': [3, 4, 6],
      'createdBy': 'Third Creator',
      'createdOn': "2021-08-04",
      'id': 0,
      'lastModified': 'Third Creator'	,
      'lastModifiedBy': '2021-08-05',
      'name':	'Curriculum 3',
      'skills': ["JS", "TS", "React", "React-Native"]
  }];

  const transitionRef = useRef();
  const transition = <Transition.Change interpolation='easeInOut' />
  

  const onPress = () => {
    transitionRef.current.animateNextTransition();
  }

  const renderItem = ({item}) => {
      return (
          <ExpandableList item={item} onPress={onPress} />
      )
  }

  //const navigation = useNavigation();

  return (
      <Transitioning.View ref={transitionRef} transition={transition}>
        {/**Title*/}
        <View style={styles.titleContainer}>
            <Text style={styles.title}>CURRICULUMS</Text>
        </View>

        {/**Add Curriculum button */}
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>ADD CURRICULUM</Text>
            </TouchableOpacity>
        </View>  

        {/**List of Curriculums */}
        <FlatList
        data={DATA}
        keyExtractor={(item, index) => `${item.name}${index}`}
        renderItem={renderItem}
        />
      </Transitioning.View>
  )
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fafafa',
      alignItems: 'center', 
      paddingTop: 50,
      flex: 1
    },
    titleContainer: {
      color: '#474C55',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
      paddingTop: 20,
      paddingBottom: 10
    },
    title: {
      fontSize: 24,
      color: '#474C55',
      fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end', 
        paddingVertical:5,
        paddingHorizontal:10
    },
    button: {
        alignSelf: 'flex-end',
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: '#72A4C2',
        borderRadius: 10
    },
    buttonText: {
        padding: 10,
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15
    }
});

export default Curricula2;