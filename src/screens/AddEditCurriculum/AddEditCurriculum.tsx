import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Header from '../../components/batches/Header';

const curriculum = {
    Name: 'CurriculumTest',
    CreatedOn: '2021-08-09',
    CreatedBy: 'Creator1',
    LastModifiedOn: '2021-08-09',
    LastModifiedBy: 'Creator1',
    Batches: 
    Skills:
}

const AddEditCurriculum: React.FC = () => {
    const [text, setText] = useState('');
    
    return(
        <View>
            <Header />
            <ScrollView>
                <Text style={styles.title}>Edit Curriculum</Text>
                <TextInput
                label="Created On"
                mode='outlined'
                outlineColor='#72A4C2'
                underlineColor='#72A4C2'
                value={text}
                onChangeText={text => setText(text)}
                style={styles.input}
                />
                <TextInput
                label="Created By"
                mode='outlined'
                outlineColor='#72A4C2'
                underlineColor='#72A4C2'
                value={text}
                onChangeText={text => setText(text)}
                style={styles.input}
                />
                <TextInput
                label="Last Modified On"
                mode='outlined'
                outlineColor='#72A4C2'
                underlineColor='#72A4C2'
                value={text}
                onChangeText={text => setText(text)}
                style={styles.input}
                />
                <TextInput
                label="Last Modified By"
                mode='outlined'
                outlineColor='#72A4C2'
                underlineColor='#72A4C2'
                value={text}
                onChangeText={text => setText(text)}
                style={styles.input}
                />
                <TextInput
                label="Batches"
                mode='outlined'
                outlineColor='#72A4C2'
                underlineColor='#72A4C2'
                value={text}
                onChangeText={text => setText(text)}
                style={styles.input}
                />
                <TextInput
                label="Skills"
                mode='outlined'
                outlineColor='#72A4C2'
                underlineColor='#72A4C2'
                value={text}
                onChangeText={text => setText(text)}
                style={styles.input}
                />
                <TouchableOpacity style={styles.saveBtnContainer}>
                    <Text style={styles.saveBtn}>SAVE</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        margin: 10,
        marginTop: 20,
        fontFamily: 'FuturaBold',
        fontSize: 22
    },
    input:{
        margin: 10,
        borderRadius: 50,
        marginHorizontal: 30,
        backgroundColor: '#FFF'
    },
    saveBtnContainer: {
        alignSelf: 'flex-end',
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: '#72A4C2',
        borderRadius: 50,
        marginHorizontal: 30
    },
    saveBtn: {
        padding: 10,
        color: '#fff',
        fontSize: 15,
        fontFamily: 'FuturaBold',
        justifyContent:'center'
    }
})

export default AddEditCurriculum;