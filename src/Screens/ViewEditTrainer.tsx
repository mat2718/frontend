import React, { useState } from 'react'
import {View, Text, StyleSheet, Keyboard, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import EditTrainer from '../components/Trainer/EditTrainer';
import ViewTrainer from '../components/Trainer/ViewTrainer';


/**
 * Authors: Joab Smith and Imran Ilyas
**/
const trainer = {
    FirstName: 'John',
    LastName: 'Doe',
    Email: 'johndoe@hotmail.com',
    ID: '0987654',
}
interface Iprops
{
    default?:boolean
}

const ViewEditTrainer = (props:Iprops) =>
{
    const initial = props.default || false
    const [edit, setEdit] = useState(initial);
    return(
        <View style = {styles.container}>
            {edit ? <EditTrainer trainer={trainer} setEdit={setEdit} /> :
            <ViewTrainer trainer={trainer} setEdit={setEdit} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //width:'100%'
    },
})

export default ViewEditTrainer;