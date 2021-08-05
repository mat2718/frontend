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
        <View style={styles.fieldRow}>
        <View style = {styles.fieldCols}>
           
                <Text style={styles.label}>First Name:</Text>
                <Text style = {styles.label}>Last Name:</Text>
                <Text style = {styles.label}>Email:</Text>
                <Text style={styles.label}>ID:</Text>
            
          
        </View>
            <View style={styles.fieldCols}>
                
            <Text style={styles.label}>First Name:</Text>
                <Text style = {styles.label}>Last Name:</Text>
                <Text style = {styles.label}>Email:</Text>
                <Text style={styles.label}>ID:</Text>
            
                
                        

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
        // flex: 1,
        marginVertical: '10%',
        marginHorizontal: '2%'
        //justifyContent: 'center'        
    },

    fieldRow: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    },

    label: {
        fontSize: 20,
        // width: '150%',
        paddingVertical: '10%',
        // alignSelf: 'flex-end'
    },
    
    input: {
        
        // flexDirection: 'row',
        // width: '150%',
        fontSize: 20,
        paddingVertical: '10%',
        textAlign: 'left',
    },
    
    fieldCols: {
        flex:1,
        
        //alignContent: 'space-between',
        alignContent: 'center',
        justifyContent: 'center'
        
    },
    
    touchableStyle: {
        backgroundColor: "#F26925",
        alignSelf:'center',
    },

    submit: {
        color: 'white',
        fontSize: 20,
        padding: '4%',
        textAlign: 'center',
    },
});

export default ViewTrainer;