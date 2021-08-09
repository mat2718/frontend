import React, {useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import IClient from '../../../assets/models/Client';
import GlobalStyles from '../../../assets/constants/GlobalStyles';
import Header from '../Header/Header';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../../assets/constants/colors'

let client=[{
    clientId:"001",clientName:"webstuff"
}];

const EditClient=()=>{

    const[newClientID , setNewClientID] = useState(client[0].clientId);
    const[newClientName, setNewClientName]=useState(client[0].clientName);

    return (
        <View style={GlobalStyles.container}>
            <Header/>
            <View>
               <Text style={GlobalStyles.h1}>Edit or Delete Client</Text> 
            </View>
            <View >
                <Text>Current Client:</Text>
                <View style={GlobalStyles.listItem}>
                    <Text>Client ID: {client[0].clientId}{"\n"}
                          Client Name: {client[0].clientName}  </Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={GlobalStyles.button} 
                        onPress={()=>{
                            if (newClientID){
                                setNewClientID("")
                            }
                            if(newClientName){
                                setNewClientName("")
                            }
                            console.log(newClientID + newClientName) 
                            }}>Delete Client</Text>
                    </TouchableOpacity>
                </View>
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
                                <Text style={GlobalStyles.button} onPress={()=>console.log(newClientID+newClientName)} >Edit Client</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )};
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

export default EditClient;
