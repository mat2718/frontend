import React, {useState} from 'react'
import {View,Text,Button, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import colors from '../../../assets/constants/colors'
import GlobalStyles from '../../../assets/constants/GlobalStyles'



const DemandList=()=>{
    const[demand,setDemand]=useState([
        { curriculum: 'Cloud/Native', needBy:'08/21/21', howMany:'20',client:"me", key:'1'},
        { curriculum: 'React/Node', needBy:'09/11/21', howMany:'7',client:"me", key:'2'},
        { curriculum: 'HTML/CSS', needBy:'11/17/21', howMany:'15', client:"you",key:'3'},
        { curriculum: 'AWS Pipeline', needBy:'10/31/21', howMany:'17',client:"you", key:'4'},
        
    ])
    
    return(
        <View>
            <FlatList
            data={demand}
            renderItem={({item})=>(
                
                <View style={styles.item}>
                    <Text style={GlobalStyles.listItem}>{item.curriculum}{item.needBy}{item.howMany}</Text>
                   <TouchableOpacity onPress={()=>console.log(item)}>
                       <Text style={GlobalStyles.button}>X</Text>
                   </TouchableOpacity>
                </View>
                       
            
            )}
         
          />
        </View>

    )



}
const styles=StyleSheet.create({
    listItem:{
        flexDirection:"row",
        padding:10,
        borderWidth:1,
        borderColor:colors.primaryGray,
        borderRadius:50,
        marginHorizontal:10,
    },
    item:{
        flexDirection:"row",
        justifyContent:"space-evenly"
    }



})
export default DemandList