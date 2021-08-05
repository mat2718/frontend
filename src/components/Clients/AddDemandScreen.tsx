import React , {useState}from 'react'
import {SafeAreaView, View, Text, StyleSheet, Picker, TouchableOpacity} from 'react-native'
import GlobalStyles from '../../../assets/constants/GlobalStyles'
import CalendarPicker from 'react-native-calendar-picker';
import Header from '../Header/Header';
import CurriculumList from './CurriculumList';
import { TextInput } from 'react-native-gesture-handler';

const AddDemandScreen = () =>{
    const[currCurriculum, setCurriculum]=useState("");
    const[demandDate, setDemandDate]= useState(Date())
    const[howMany, setHowMany]=useState(0);

    return(
        <SafeAreaView style={GlobalStyles.container}>
            <Header/>
            <View>
                <Text>Please Select Date Needed By</Text>
                <CalendarPicker
               
               
                />
            </View> 
            <View>
                <Text>Please Select the Curriculum you need:</Text>
                <CurriculumList setCurriculum={setCurriculum}/>
            </View>
            <View>
                <Text>Please Enter How Many Associates you Require:<Text style={GlobalStyles.textInput}>place</Text></Text>
            </View>
            <View>
                <Text>New Demand:</Text>
                <View>
                    <View>
                        <Text>Client:</Text>
                        <Text>Curriculum: {currCurriculum}</Text>
                        <Text>Needed By: {demandDate}</Text>
                        <Text># Associates Needed: {howMany}</Text>
                    </View>    
                    <View>
                        <TouchableOpacity >
                            <Text style={GlobalStyles.button}>Add Demand</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
           


      </SafeAreaView>
    )}
export default AddDemandScreen;