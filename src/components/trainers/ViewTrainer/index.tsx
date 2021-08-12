import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { inputStyles } from '../../../styles';
/**
 * Authors: Joab Smith and Imran Ilyas
 **/
interface ITrainer {
  FirstName: string;
  LastName: string;
  Email: string;
}

interface IProps {
  trainer: ITrainer;
  setEdit: (value: boolean) => void;
}
const ViewTrainer: React.FC<IProps> = (props: IProps) => {
  const edit = () => {
    console.log('Edit');
    props.setEdit(true);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {props.trainer.FirstName + ' ' + props.trainer.LastName}'s Profile
      </Text>
      <View style={styles.fieldCols}>
        <Text style={inputStyles.inputLabelText}>First Name:</Text>
        <Text style={inputStyles.textInput}>{props.trainer.FirstName}</Text>

        <Text style={inputStyles.inputLabelText}>Last Name:</Text>
        <Text style={inputStyles.textInput}>{props.trainer.LastName}</Text>

        <Text style={inputStyles.inputLabelText}>Email:</Text>
        <Text style={inputStyles.textInput}>{props.trainer.Email}</Text>

      </View>

      <TouchableOpacity style={styles.touchableStyle} onPress={edit}>
        <Text style={styles.submit}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginVertical: '10%',
    marginHorizontal: '2%',
    justifyContent: 'center',
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
    textAlign: 'right',
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
    flex: 1,
    width: '100%',
    //alignContent: 'space-between',
    alignContent: 'center',
    justifyContent: 'center',
  },

  touchableStyle: {
    backgroundColor: '#F26925',
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
