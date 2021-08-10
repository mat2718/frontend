import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';;
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type CurriculaScreenProp = StackNavigationProp<RootStackParamList, 'Curricula'>

export const ExpandableList = ({item, onPress}) => {
    const [expanded, setExpanded] = useState(false);
    const [icon, setIcon] = useState(<MaterialCommunityIcons name="chevron-up" size={30} color="#F26925" style={styles.icon} />); 

    const onCurriculumPress = () => {
        onPress();
        setExpanded(!expanded);
        if(expanded === true) {
            setIcon(<MaterialCommunityIcons name="chevron-up" size={30} color="#F26925" style={styles.icon} />);
        }
        
        if(expanded === false) {
            setIcon(<MaterialCommunityIcons name="chevron-down" size={30} color="#F26925" style={styles.icon} />);
        }
    }

    const batches = item.batches.join(', ');
    const skills = item.skills.join(', ');

    const navigation = useNavigation<CurriculaScreenProp>();

    return (
        <TouchableOpacity style={styles.wrap} onPress={onCurriculumPress}>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
                <Text style={styles.curriculumName}>{item.name}</Text>
                {icon}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title2}>Created On: </Text>
                <Text style={styles.text}>{item.createdOn}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title2}>Created By: </Text>
                <Text style={styles.text}>{item.createdBy}</Text>
            </View>

            {expanded && (
            <>
                <View style={styles.textContainer}>
                    <Text style={styles.title2}>Last Modified On: </Text>
                    <Text style={styles.text}>{item.lastModified}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title2}>Last Modified By: </Text>
                    <Text style={styles.text}>{item.lastModifiedBy}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title2}>Batches: </Text>
                    <Text style={styles.text}>{batches}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title2}>Skills: </Text>
                    <Text style={styles.text}>{skills}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddEditCurriculum')}>
                        <Text style={styles.buttonText}>EDIT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => navigation.navigate('AddEditCurriculum')}>
                        <Text style={styles.buttonText}>DELETE</Text>
                    </TouchableOpacity>
                </View>
            </>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.75,
        shadowRadius: 4,
        elevation: 8,
    },
    container: { flexDirection: 'row' },
    textContainer: { 
        flexDirection: 'row',
        paddingVertical: 2
    },
    details: { margin: 10 },
    curriculumName: {
        fontSize: 20,
        color: '#474C55',
        fontFamily: 'FuturaBold',
        alignSelf: 'flex-start'
    },
    text: { 
        opacity: 0.7,
        flexDirection: 'row',
        paddingVertical: 2,
        fontFamily:'FuturaBook',
        fontSize: 15
    },
    icon: {
        alignSelf: 'flex-end',
        marginLeft: 'auto',
        marginRight: 0
    },
    title2: {
        fontSize: 18,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        color: '#474C55',
        fontFamily: 'FuturaBook'
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
        paddingHorizontal: 5,
        backgroundColor: '#72A4C2',
        borderRadius: 50
    },
    buttonText: {
        padding: 10,
        color: '#fff',
        fontSize: 15,
        fontFamily: 'FuturaBold'
    },
    deleteButton: {
        alignSelf: 'flex-end',
        paddingVertical: 2,
        paddingHorizontal: 5,
        backgroundColor: '#F26925',
        borderRadius: 50,
        marginLeft: 10
    },
  });