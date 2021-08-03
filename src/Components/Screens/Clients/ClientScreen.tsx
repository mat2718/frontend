import React from 'react';
import {View,Text,StyleSheet, Button, TouchableOpacity} from 'react-native';

const ClientScreen=()=>{

    return(<View style={styles.clientName}>
                <Text>Client Name 
                    <TouchableOpacity style={styles.button}><Text>"Add"</Text></TouchableOpacity>
                </Text>


    </View>
        
            
        
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
