import React from 'react';
import {View,Text,StyleSheet, Picker, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../../assets/constants/GlobalStyles';
import DemandList from './DemandList';
import ClientList from './ClientList';
import AddDemandScreen from './AddDemandScreen'


const ClientScreen=()=>{

    return(
        <View style={GlobalStyles.container}>
            <View style={styles.clientName}>
                <Text>Client Name: </Text>
                
               
            <TouchableOpacity style={GlobalStyles.container}>
            <Text style={GlobalStyles.button}>Add</Text>
            </TouchableOpacity>
            </View>
            <ClientList/>
            <View>
               <DemandList/>
            </View>
            <TouchableOpacity>
                <Text style={GlobalStyles.button} onPress={()=>{
                    return(
                        <View>
                            <AddDemandScreen/>
                        </View>
                    )
                }}>Create A Demand</Text>
            </TouchableOpacity>
            </View>
        
            
        
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
