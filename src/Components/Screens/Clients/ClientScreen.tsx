import React from 'react';
import {View,Text,StyleSheet, Picker, TouchableOpacity} from 'react-native';

const ClientScreen=()=>{

    return(
            <><View style={styles.clientName}>

            <TouchableOpacity style={styles.button}>
                <Text>"Add"</Text>
            </TouchableOpacity>
        </View>
        <View>
               
            </View></>
        
            
        
    )
}
const styles= StyleSheet.create({
    clientName:{
        flexDirection:"row",
    },
    button:{
        backgroundColor:"orange"
    }

})

export default ClientScreen;
