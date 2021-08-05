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
            <View style = {styles.fieldRow}>
                <View style = {styles.fieldCols}>
                    <Text style = {styles.label}>First Name:</Text>
                    <Text style = {styles.label}>Last Name:</Text>
                    <Text style = {styles.label}>Email:</Text>
                    <Text style = {styles.label}>ID:</Text>
                </View>

                <View style = {styles.fieldCols}>
                    <TextInput style = {styles.input} testID = 'Firstname' placeholder='First Name' onChangeText={setFirstName}>{firstName}</TextInput>
                    <TextInput style = {styles.input} testID = 'Lastname' placeholder='Last Name' onChangeText={setLastName}>{lastName}</TextInput>
                    <TextInput style = {styles.input} testID = 'Email' placeholder= 'Email' onChangeText={setEmail}>{email}</TextInput>
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
        flexDirection: 'row',
    },

    label: {
        fontSize: 20,
      paddingVertical: '2%'  
    },
    
    input: {
        fontSize: 20,
        padding: '2%',  
    },
    
    fieldCols: {
        flexDirection: 'column',
        padding: '10%',
        alignContent: 'space-between',
        
    },
    
    touchableStyle: {
        backgroundColor: "#F26925",
        alignSelf:'center',
    },

    submit: {
        color: 'white',
        fontSize: 20,
        padding: '4%',
    },
});
export default CreateTrainer;