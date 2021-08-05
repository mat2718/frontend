import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import GlobalStyles from '../../../assets/constants/GlobalStyles'
import RNPickerSelect from 'react-native-picker-select';



const ClientList=(props: { setClient: (arg0: any) => void; })=>{
    

    return(
        <View style={GlobalStyles.dropDown}>
            <RNPickerSelect 
                onValueChange={(value) => props.setClient(value)}
                items={[
                    {label:"WebStuff", value:"webstuff"},
                    {label:"InfoMe", value:"infome"},
                    {label:"CogWheel", value:"cogwheel"},
                    {label:"NoAWS" ,value:"noaws"},
                    {label:"RevatureJr", value:"revaturejr"}
                ]}
            />

        </View>


    )

    
}
const styles=StyleSheet.create({
    drop:{
        flex:1,
        width:"80%",
    }

})
export default ClientList;