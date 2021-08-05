import React from 'react'
import {View, Text, StyleSheet, Picker, TouchableOpacity} from 'react-native'
import GlobalStyles from '../../../assets/constants/GlobalStyles'


const AddDemandScreen = () =>{
    return(
        <View style={GlobalStyles.container}>

      
        <View>

            <TouchableOpacity >
                <Text style={GlobalStyles.button}>Add Demand</Text>

            </TouchableOpacity>
        </View>
        </View>
    )
}
export default AddDemandScreen;