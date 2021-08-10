import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform, TextInput} from 'react-native';
import {  } from 'react-native-paper';
import Header from '../../components/batches/Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TagInput from 'react-native-tags-input';

const AddEditCurriculum: React.FC = () => {
    const [text, setText] = useState('');

    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));

    const showPicker = () => {
        setIsPickerShow(true);
    }

    const onChange = (e, val) => {
        if(val) {
            setDate(val);
            setIsPickerShow(false);
        } else {
            setIsPickerShow(false);
        }
    }

    function convertDate(date: string | number | Date) {
        function pad(s: string | number) { return (s < 10) ? '0' + s : s; }
        var d = new Date(date)
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-');
    }

    /** Does it work? */
    return(
        <View>
            <Header />
            <ScrollView>
                <Text style={styles.title}>Edit Curriculum</Text>
                <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.txtContainer}>Created On</Text>
                    <Text style={styles.input}>{convertDate(date)}</Text>
                    {!isPickerShow && (
                        <TouchableOpacity style={styles.btnContainer} onPress={showPicker}>
                            <Text style={styles.buttonText2}>
                                <MaterialCommunityIcons name="calendar-edit" size={20} color="#474C55" />
                            </Text>
                        </TouchableOpacity>
                    )}

                    {isPickerShow && (
                        <DateTimePicker
                        value={date}
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onChange}
                        style={styles.datePicker}
                        />
                    )}
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.txtContainer}>Created By:</Text>
                    <TextInput
                    value={text}
                    onChangeText={text => setText(text)}
                    style={styles.input}
                    />
                </View>
                
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.txtContainer}>Last Modified On:</Text>
                    <Text style={styles.input}>{convertDate(date)}</Text>
                    {!isPickerShow && (
                        <TouchableOpacity style={styles.btnContainer} onPress={showPicker}>
                            <Text style={styles.buttonText2}>
                                <MaterialCommunityIcons name="calendar-edit" size={20} color="#474C55" />
                            </Text>
                        </TouchableOpacity>
                    )}

                    {isPickerShow && (
                        <DateTimePicker
                        value={date}
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onChange}
                        style={styles.datePicker}
                        />
                    )}
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.txtContainer}>Last Modified By:</Text>
                    <TextInput
                    value={text}
                    onChangeText={text => setText(text)}
                    style={styles.input}
                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.txtContainer}>Batches:</Text>
                    <TextInput
                    value={text}
                    onChangeText={text => setText(text)}
                    style={styles.input}
                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.txtContainer}>Skills:</Text>
                    <TagInput
                    updateState={}
                    />
                </View>
                <TouchableOpacity style={styles.saveBtnContainer}>
                    <Text style={styles.saveBtn}>SAVE</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.75,
        shadowRadius: 4,
        elevation: 8,
    },
    title: {
        margin: 10,
        marginTop: 20,
        fontFamily: 'FuturaBold',
        fontSize: 22
    },
    input:{
        margin: 10,
        borderRadius: 50,
        marginHorizontal: 10,
        padding: 10,
        paddingHorizontal: 'auto'
    },
    saveBtnContainer: {
        alignSelf: 'flex-end',
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: '#F26925',
        borderRadius: 50,
        marginHorizontal: 10
    },
    saveBtn: {
        padding: 10,
        color: '#fff',
        fontSize: 15,
        fontFamily: 'FuturaBold',
        justifyContent:'center'
    },
    btnContainer:{
        marginTop:5,
        justifyContent: 'center'
    },
    buttonText2: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: "#FFF",
        fontSize: 15,
        fontFamily: 'FuturaBook',
        backgroundColor: "#72A4C2",
        borderRadius: 50,
    },
    // This only works on iOS
    datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    txtContainer: {
        alignSelf:'flex-start',
        marginLeft: 5,
        marginTop: 10,        
        paddingVertical: 10,
        color: "#474C55",
        fontSize: 15,
        fontFamily: 'FuturaBold',
        borderRadius: 50, 
    }
})

export default AddEditCurriculum;