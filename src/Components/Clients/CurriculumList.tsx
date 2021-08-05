import React,{useState} from 'react'
import {View,Text,Picker,StyleSheet} from 'react-native'
import GlobalStyles from '../../../assets/constants/GlobalStyles'
const name="Bob"



const CurriculumList=()=>{
    const [state,setState]=useState(name);


    return(
        <View style={GlobalStyles.container}>
            <Picker
                style={styles.drop}
                selectedValue={state}
               
            >
                <Picker.Item label="WebStuff" value="webstuff"/>
                <Picker.Item label="InfoMe" value="infome"/>
                <Picker.Item label="CogWheel" value="cogwheel"/>
                <Picker.Item label="NoAWS" value="noaws"/>
                <Picker.Item label="REvatureJr" value="revaturejr"/>


            </Picker>
        </View>


    )

    
}
const styles=StyleSheet.create({
    drop:{
        flex:1,
        width:"80%",
    }

})
export default CurriculumList;