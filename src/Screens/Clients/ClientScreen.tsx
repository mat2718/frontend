import React, {useState} from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../../assets/constants/GlobalStyles';
import DemandList from '../../components/Clients/DemandList';
import ClientList from '../../components/Clients/ClientList';
import AddDemandScreen from '../../components/Clients/AddDemandScreen';
import IDemand from '../../../assets/models/Demand';
import Header from '../../components/Header/Header';
import IClient from '../../../assets/models/Client';
import colors from '../../../assets/constants/colors';
import {useNavigation} from '@react-navigation/native'

let clients = [
    { clientId:"001",clientName:"webstuff"},
    { clientId:"002",clientName:"infome"},
    { clientId:"003",clientName:"cogwheel"},
    { clientId:"004",clientName:"noaws"},
    { clientId:"005",clientName:"revaturejr"},
        

]
let current: IClient[]=[];






const ClientScreen=()=>{
    const[currClient, setClient]=useState<IClient>("");
    const navigation = useNavigation();

  
    for(let x=0;x<clients.length;x++){
        if (clients[x].clientName===currClient)
        {

            current.push(clients[x])
        }
    }
    
    
    return(
        <View style={GlobalStyles.container}>
            {/* <Header/> */}
            <Text style={GlobalStyles.h1}>Current Client</Text>
            <View style={styles.clientDisplay}>
                <Text>Client Name: {currClient.clientName} {"\n"}
                      Client Id: {currClient.clientId}
                </Text>         
               
            <TouchableOpacity>
             
            <Text style={GlobalStyles.button} onPress={() => {navigation.navigate("EditClient", currClient) }}>Edit Client</Text>
           
            </TouchableOpacity>
            </View>
            <View style={styles.clientStuff}>
            <ClientList setClient={setClient} />
              <View>
            <TouchableOpacity>
            <Text style={GlobalStyles.button} onPress={() => {navigation.navigate("AddClient") }}>Add Client</Text>          
            
            </TouchableOpacity>
            </View> 
            </View>
            <View>
                <Text style={GlobalStyles.h1}>Here Are the Current Demands</Text>
               <DemandList currClient={currClient}/>
            </View>
            <View >
            <TouchableOpacity style={styles.screenNav}>
                <Text style={GlobalStyles.button} onPress={() => {navigation.navigate("AddDemand") }}>Create A Demand</Text>
                <Text style={GlobalStyles.button} onPress={() => {navigation.navigate("EditDemand") }}>Edit A Demand</Text>
            </TouchableOpacity>
            </View>
            </View>
        
            
        
    )
}
const styles= StyleSheet.create({
   screenNav:{
           flexDirection:"row",
           justifyContent:"space-evenly"

          },
          clientDisplay:{
              flexDirection:"row",
              justifyContent:"space-between",
              marginHorizontal:10,
              borderWidth:1,
              borderRadius:50,
              padding:20,
              marginBottom:5,
              backgroundColor:colors.secondaryBlue,
          },
          clientStuff:{
          }
           
      
    
    
})

export default ClientScreen;
