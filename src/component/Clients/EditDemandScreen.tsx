import React from 'react'
import {View, Text, StyleSheet, Picker, TouchableOpacity} from 'react-native'
import GlobalStyles from '../../../assets/constants/GlobalStyles'


const EditDemandScreen = () =>{
    return(
        <View style={GlobalStyles.container}>

      
        <View>

            <TouchableOpacity >
                <Text style={GlobalStyles.button}>Edit Demand</Text>

            </TouchableOpacity>
        </View>
        </View>
    )
}
export default EditDemandScreen;