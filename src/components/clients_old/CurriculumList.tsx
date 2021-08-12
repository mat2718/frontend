import React,{useState} from 'react'
import {View,Text,Picker,StyleSheet} from 'react-native'
import GlobalStyles from '../../assets/constants/GlobalStyles'
import RNPickerSelect from 'react-native-picker-select'
import colors from '../../assets/constants/colors'


const curric=[
    {label:"Dev/Ops",value:"Dev/Ops"},
    {label:"React/Native",value:"React/Native"},
    {label:"Cloud Native",value:"Cloud Native"},
    {label:"Java/.Net",value:"Java/.Net"},
    {label:"HTML/CSS",value:"HTML/CSS"},
    {label:"SWift",value:"Swift"},
    {label:"Python",value:"Python"},

]

const CurriculumList=(props: { setCurriculum: (arg0: any) => void; })=>{
   


    return(
        <View style={GlobalStyles.dropDown}>
        <RNPickerSelect 
            style={{ inputAndroid: { color:colors.primaryGray } }}
            useNativeAndroidPickerStyle={false}
            
            placeholder={{
                label: 'Select a curriculum...',
                value: null,
            }}
            onValueChange={(value) => props.setCurriculum(value) }
            
            items={curric}
        />
    </View>
    )

    
}
const styles=StyleSheet.create({
   
})
export default CurriculumList;