import React from 'react';
import {View,Text,StyleSheet, Picker, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../../../assets/constants/GlobalStyles';
const ClientScreen=()=>{

    return(
            <><View style={styles.clientName}>
                <Text>Client Name: </Text>
            <TouchableOpacity style={GlobalStyles.button}>
                <Text style={GlobalStyles.button}>Add</Text>
            </TouchableOpacity>
        </View>
        <View>
               
            </View></>
        
            
        
    )
}
const styles= StyleSheet.create({
    clientName:{
        flexDirection:"row",
       alignItems:"center",
        justifyContent:"center",
    },
    
})

export default ClientScreen;
