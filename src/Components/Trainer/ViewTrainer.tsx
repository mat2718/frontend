import React from 'react'
import {View, Text, StyleSheet, Keyboard, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
/**
 * Authors: Joab Smith and Imran Ilyas
**/
interface ITrainer
{
    FirstName: string,
    LastName: string,
    Email: string,
    ID: string,
}

interface IProps
{
    trainer: ITrainer
    setEdit: (value: boolean) => void
}
const ViewTrainer = (props: IProps) =>
{
    
    const edit = () =>
    {
        console.log('Edit');
        props.setEdit(true);
    }
    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>{props.trainer.FirstName + ' ' + props.trainer.LastName}'s Profile</Text>
        <View style = {styles.fieldCols}>
           
                <View style={styles.fieldRow}>
                    <Text style={styles.label}>First Name:</Text>
                    <Text style={styles.value}>{props.trainer.FirstName}</Text>
                </View>
                <View style={styles.fieldRow}>
                    <Text style={styles.label}>Last Name:</Text>
                    <Text style={styles.value}>{props.trainer.LastName}</Text>

                </View>
                <View style={styles.fieldRow}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{props.trainer.Email}</Text>

                </View>
                <View style={styles.fieldRow}>
                <Text style={styles.label}>ID:</Text>
                    <Text style={styles.value}>{props.trainer.ID}</Text>

                </View>
        </View>
            
          
            
                  
        
        
        <TouchableOpacity style = {styles.touchableStyle} onPress={edit}>
            <Text style = {styles.submit}>Edit</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginVertical: '10%',
        marginHorizontal: '2%',
        justifyContent: 'center'        
    },

    header: {
        margin: '2%',
        fontSize: 30,
        textAlign: 'center',
    },

    fieldRow: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',

    },

    label: {
        fontSize: 20,
        width: '30%',
        paddingVertical: '10%',
        textAlign: 'right'
        //alignSelf: 'flex-end'
    },
    
    value: {
        
        // flexDirection: 'row',
        width: '70%',
        fontSize: 20,
        paddingVertical: '10%',
        textAlign: 'center',
    },
    
    fieldCols: {
        flex:1,
        width: '100%',
        //alignContent: 'space-between',
        alignContent: 'center',
        justifyContent: 'center',
       
        
    },
    
    touchableStyle: {
        backgroundColor: "#F26925",
        alignSelf: 'center',
        
        borderRadius: 100,
        margin: '10%',
    },

    submit: {
        color: 'white',
        fontSize: 20,
        padding: '4%',
        textAlign: 'center',
    },
});

export default ViewTrainer;