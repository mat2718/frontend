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

const EditClient=((props:any)=>{

    const[newClientID , setNewClientID] = useState();
    const[newClientName, setNewClientName]=useState(props.route.params);

    return (
        <View style={GlobalStyles.container}>
            {/* <Header/> */}
            <View>
               <Text style={GlobalStyles.h1}>Edit or Delete Client</Text> 
            </View>
            <View >
                <Text>Current Client:</Text>
                <View style={GlobalStyles.listItem}>
                    <Text>Client ID: {props.route.params[1]}{"\n"}
                          Client Name: {props.route.params[0]}  </Text>
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
                                <Text style={GlobalStyles.button} onPress={()=>console.log(props.route.params)} >Edit Client</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )});
const styles=StyleSheet.create({
    textEntry:{
       
        backgroundColor:colors.secondaryBlue,
        borderRadius:50,
        padding:20,
        alignContent:"center",
        margin:10,


    },
    editClient:{
        flexDirection:"row",
    }
})        

export default EditClient;
