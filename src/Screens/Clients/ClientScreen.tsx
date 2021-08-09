import React, {useState} from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../../assets/constants/GlobalStyles';
import DemandList from '../../components/Clients/DemandList';
import ClientList from '../../components/Clients/ClientList';
import AddDemandScreen from '../../components/Clients/AddDemandScreen';
import IDemand from '../../../assets/models/Demand';
import Header from '../../components/Header/Header';
import IClient from '../../../assets/models/Client';

let clients = [
    { clientId:"001",clientName:"webstuff"},
    { clientId:"002",clientName:"infome"},
    { clientId:"003",clientName:"cogwheel"},
    { clientId:"004",clientName:"noaws"},
    { clientId:"005",clientName:"revaturejr"},
        

]
let current: IClient[]=[];






const ClientScreen=()=>{
    const[currClient, setClient]=useState("");

  
    for(let x=0;x<clients.length;x++){
        if (clients[x].clientName===currClient)
        {

            current.push(clients[x])
        }
    }
   
    
    return(
        <View style={GlobalStyles.container}>
            <Header/>
            <View>
                <Text>Client Name: {current[0].clientName}{"\n"}
                      Client Id: {current[0].clientId}  
                </Text>         
               
            <TouchableOpacity>
            <Text style={GlobalStyles.button}>Add</Text>
            </TouchableOpacity>
            </View>
            <View style={GlobalStyles.listItem}>

            </View>
            <ClientList setClient={setClient} />
            <View>
                <Text>Here Are the Current Demands</Text>
               <DemandList currClient={currClient}/>
            </View>
            <View >
            <TouchableOpacity style={styles.screenNav}>
                <Text style={GlobalStyles.button} onPress={()=>console.log("Add a demand")}>Create A Demand</Text>
                <Text style={GlobalStyles.button} onPress={()=>console.log("Edit a demand")}>Edit A Demand</Text>
            </TouchableOpacity>
            </View>
            </View>
        
            
        
    )
}
const styles= StyleSheet.create({
   screenNav:{
           flexDirection:"row",
           justifyContent:"space-between"

          },
      
    
    
})

export default ClientScreen;
