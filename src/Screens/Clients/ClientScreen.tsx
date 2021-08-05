import React, {useState} from 'react';
import {View,Text,StyleSheet, Picker, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../../assets/constants/GlobalStyles';
import DemandList from '../../components/Clients/DemandList';
import ClientList from '../../components/Clients/ClientList';
import AddDemandScreen from '../../components/Clients/AddDemandScreen';
import IDemand from '../../../assets/models/Demand';
import Header from '../../components/Header/Header';


const ClientScreen=()=>{
    const[currClient, setClient]=useState("");
   

    return(
        <View style={GlobalStyles.container}>
            <Header/>
            <View style={styles.clientName}>
                <Text>Client Name:<Text>{currClient}</Text></Text>         
               
            <TouchableOpacity>
            <Text style={GlobalStyles.button}>Add</Text>
            </TouchableOpacity>
            </View>
            <ClientList setClient={setClient} />
            <View>
              
               <DemandList currClient={currClient}/>
            </View>
            <View style={styles.clientName}>
            <TouchableOpacity>
                <Text style={GlobalStyles.button} onPress={()=>console.log("Add a demand")}>Create A Demand</Text>
                <Text style={GlobalStyles.button} onPress={()=>console.log("Edit a demand")}>Edit A Demand</Text>
            </TouchableOpacity>
            </View>
            </View>
        
            
        
    )
}
const styles= StyleSheet.create({
    clientName:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 40,
            paddingRight: 40,
          },
      
    
    
})

export default ClientScreen;
