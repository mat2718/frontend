import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import GlobalStyles from '../../../assets/constants/GlobalStyles'
import RNPickerSelect from 'react-native-picker-select';
import colors from '../../../assets/constants/colors';


const ClientList=(props: { setClient: (arg0: any) => void; })=>{
    

    return(
        <View testID='picker' style={GlobalStyles.dropDown}>
            <RNPickerSelect 
             style={{ inputAndroid: { color:colors.primaryGray } }}
            placeholder={{
                label: 'Select a client...',
                value: null,
            }}
                onValueChange={(value) => props.setClient(value)}
                items={[
                    {label:"WebStuff", value:"webstuff"},
                    {label:"InfoMe", value:"infome"},
                    {label:"CogWheel", value:"cogwheel"},
                    {label:"NoAWS" ,value:"noaws"},
                    {label:"RevatureJr", value:"revaturejr"}
                ]}
            />
            <></>

        </View>


    )

    
}
const styles=StyleSheet.create({
  

})
export default ClientList;