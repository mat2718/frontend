import React from 'react';
import {Text, TextInput, TouchableOpacity, StyleSheet, View, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
//import axios from 'axios';

const CreateTrainer = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.fieldRow}>
                <View style = {styles.fieldCols}>
                    <Text>First Name:</Text>
                    <Text>Last Name:</Text>
                    <Text>Email:</Text>
                    <Text>ID:</Text>
                </View>

                <View style = {styles.fieldCols}>
                    <TextInput ></TextInput>
                    <TextInput ></TextInput>
                    <TextInput ></TextInput>
                    <TextInput></TextInput>
                </View>
            </View>
            
            
            <TouchableOpacity style = {styles.touchableStyle}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        
    },

    fieldRow: {
        flexDirection: 'row',
                
    },
    fieldCols: {
        flexDirection: 'column',
        
    },
    
    touchableStyle: {
        
    },
});
export default CreateTrainer;