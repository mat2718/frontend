import React from 'react';
import { useState } from 'react';
import {Text, TextInput, TouchableOpacity, StyleSheet, View, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
//import axios from 'axios';

const CreateTrainer = () =>
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [ID, setID] = useState('');
    
    const submit = () => {
        return ('hi');
    }
    
    return(
        <View style = {styles.container}>
            <View style={styles.fieldRow}>
                <View style = {styles.fieldCols}>
                    <Text style={styles.label}>First Name:</Text>
                </View>
                <View style={styles.fieldCols}>
                    <TextInput style = {styles.input} testID = 'Firstname' placeholder='First Name' onChangeText={setFirstName}>{firstName}</TextInput>
                </View>
            </View>
            
            <View style={styles.fieldRow}>
                <View style = {styles.fieldCols}>
                    <Text style = {styles.label}>Last Name:</Text>
                </View>
                <View style = {styles.fieldCols}>
                    <TextInput style = {styles.input} testID = 'Lastname' placeholder='Last Name' onChangeText={setLastName}>{lastName}</TextInput>
                </View>                            
            </View>

            <View style={styles.fieldRow}>
                <View style = {styles.fieldCols}>
                    <Text style = {styles.label}>Email:</Text>
                </View>
                <View style = {styles.fieldCols}>
                    <TextInput style = {styles.input} testID = 'Email' placeholder= 'Email' onChangeText={setEmail}>{email}</TextInput>
                </View>
            </View>
            
            <View style={styles.fieldRow}>
                <View style = {styles.fieldCols}>
                    <Text style={styles.label}>ID:</Text>
                </View>
                <View style = {styles.fieldCols}>
                    <TextInput style = {styles.input} testID = 'ID' placeholder='ID Number' onChangeText={setID}>{ID}</TextInput>
                </View>                
            </View>
            
            
            <TouchableOpacity style = {styles.touchableStyle} onPress={submit}>
                <Text style = {styles.submit}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '10%',
        justifyContent: 'center'        
    },

    fieldRow: {
        flex: 1,
        flexDirection: 'row',
    },

    label: {
        fontSize: 20,
        paddingVertical: '2%',
        alignSelf: 'flex-end'
    },
    
    input: {
        fontSize: 20,
        paddingVertical: '2%',  
    },
    
    fieldCols: {
        flexDirection: 'column',
        padding: '10%',
        //alignContent: 'space-between',
        alignContent: 'center'
        
    },
    
    touchableStyle: {
        backgroundColor: "#F26925",
        alignSelf:'center',
    },

    submit: {
        color: 'white',
        fontSize: 20,
        padding: '4%',
        textAlign: 'center',
    },
});
export default CreateTrainer;