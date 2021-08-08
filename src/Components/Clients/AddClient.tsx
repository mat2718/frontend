import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../../assets/constants/GlobalStyles';
import colors from '../../../assets/constants/colors';
import Header from '../Header/Header';
const AddClient=()=> {

    const[newClientID,setNewClientID]=useState("")
    const[newClientName,setNewClientName]=useState("")
    return (
        <View style={GlobalStyles.container}>
            <Header/>
            <Text style={GlobalStyles.h1}>Please Enter New Client Information:</Text>
            <View style={styles.textEntry}>
                <Text>New Client ID:  </Text>
                <TextInput 
                    style={GlobalStyles.textInput} 
                 
                    keyboardType="default" 
                    placeholder="New Client ID"                
                    onChangeText={text =>setNewClientID(text)}                 
                  />
                  
                    <Text>New Client Name: </Text>
                    <TextInput
                      style={GlobalStyles.textInput} 
                      keyboardType="default" 
                      placeholder="New Client Name"                 
                      defaultValue={""}
                      onChangeText={text =>setNewClientName(text)}                    
                        />   
                </View>
                <View>
                    <TouchableOpacity >
                                <Text style={GlobalStyles.button} onPress={()=>console.log(newClientID+newClientName)} >Add a New Client</Text>
                    </TouchableOpacity>
                </View>
            </View>
      

      
    )
}


const styles=StyleSheet.create({
    textEntry:{
       
        backgroundColor:colors.secondaryBlue,
        borderRadius:50,
        padding:20,
        alignContent:"center",


    },
    editClient:{
        flexDirection:"row",
    }
})        
export default AddClient;