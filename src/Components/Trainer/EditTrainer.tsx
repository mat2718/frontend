import React from 'react';
import { useState } from 'react';
import {Text, TextInput, TouchableOpacity, StyleSheet, View, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import Header from '../Header/index';

//import axios from 'axios';
/**
 * Authors: Joab Smith and Imran Ilyas
**/
interface ITrainer
{
    FirstName: string,
    LastName: string,
    Email: string,
    ID: string,
}

interface IProps
{
    trainer: ITrainer
    setEdit: (value:boolean) => void
}
const EditTrainer = (props:IProps) =>
{
    const [firstName, setFirstName] = useState(props.trainer.FirstName);
    const [lastName, setLastName] = useState(props.trainer.LastName);
    const [email, setEmail] = useState(props.trainer.Email);
    const [ID, setID] = useState(props.trainer.ID);
    
    const update = () => {
        console.log('Update');
        props.setEdit(false);
    }
    
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
               
            <Text style = {styles.header}>Edit Trainer</Text>

           

            {/* <View style={styles.fieldRow}> */}
            <View style = {styles.fieldCols}>
           
                    <View style={styles.fieldRow}>
                        <Text style={styles.label}>First Name:</Text>
                        <TextInput style = {styles.input} testID = 'Firstname' placeholder='First Name' onChangeText={setFirstName}>{firstName}</TextInput>
           
                    </View>
                    <View style={styles.fieldRow}>
                        <Text style={styles.label}>Last Name:</Text>
                        <TextInput style = {styles.input} testID = 'Lastname' placeholder='Last Name' onChangeText={setLastName}>{lastName}</TextInput>
                   </View>
                    <View style={styles.fieldRow}>
                        <Text style={styles.label}>Email:</Text>
                        <TextInput style={styles.input} selection={{ start: 1 }} testID = 'Email' placeholder= 'Email' onChangeText={setEmail}>{email}</TextInput>
                    </View>
                    <View style={styles.fieldRow}>
                        <Text style={styles.label}>ID:</Text>
                        <TextInput style = {styles.input} testID = 'ID' placeholder='ID Number' onChangeText={setID}>{ID}</TextInput>
                    </View>
                {/* </View> */}
                      
            </View>
            
            
            <TouchableOpacity style = {styles.touchableStyle} onPress={update}>
                <Text style = {styles.submit}>Update</Text>
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginVertical: '10%',
        marginHorizontal: '2%',        
    },

    header: {
        margin: '2%',
        fontSize: 30,
        textAlign: 'center',
    },

    fieldRow: {
        //flex: 1,
        width: '100%',
        flexDirection: 'row',
       

    },

    label: {
        fontSize: 20,
        width: '30%',
        paddingVertical: '10%',
        textAlign: 'right'
        //alignSelf: 'flex-end'
    },
    
    input: {
        
        // flexDirection: 'row',
        width: '70%',
        fontSize: 20,
        //paddingVertical: '10%',
        textAlign: 'center',
    },
    
    fieldCols: {
        flex:1,
        width: '100%',
        //alignContent: 'space-between',
        alignContent: 'center',
        justifyContent: 'center',
       
        
    },
    
    touchableStyle: {
        backgroundColor: "#F26925",
        alignSelf:'center',
        borderRadius: 100,
        margin: '10%',
    },

    submit: {
        color: 'white',
        fontSize: 20,
        padding: '4%',
        textAlign: 'center',
    },
});
export default EditTrainer;