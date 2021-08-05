import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import GlobalStyles from '../../../assets/constants/GlobalStyles'
import RNPickerSelect from 'react-native-picker-select';



const ClientList=(props: { setClient: (arg0: any) => void; })=>{
    

    return(
        <View style={GlobalStyles.container}>
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

            {/* <Picker
                style={styles.drop}
                selectedValue={state}
               
            >
                <Picker.Item {label="WebStuff", value="webstuff"}/>
                <Picker.Item {label="InfoMe", value="infome"}/>
                <Picker.Item {label="CogWheel", value="cogwheel"}/>
                <Picker.Item {label="NoAWS" ,value="noaws"}/>
                <Picker.Item {label="REvatureJr", value="revaturejr"}/>


            </Picker> */}
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