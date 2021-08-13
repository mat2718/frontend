import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/batches/header';
import { screenStyles } from '../../styles';
import EditCurriculum from '../../components/curricula/edit-curriculum'

interface IProps {
  route: {
    params?: {
      curriculumName: string;
      createdOn: any;
      modifiedOn: any;
      createdBy: string;
      modifiedBy: string;
      skills: any;
      batches: any;
    };
  };
}

/** code complexity is above the threshold here according to sonarlint, might need to modularize parts of this */
const AddEditCurriculum: React.FC<IProps> = ({ route }) => {
  const [text, setText] = useState('');



  /** Does it work? */
  return (
    <View style={screenStyles.safeAreaView}>
      <Header />
      <EditCurriculum />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 8,
  },
  title: {
    margin: 10,
    marginTop: 20,
    fontFamily: 'FuturaBold',
    fontSize: 22,
  },
  input: {
    margin: 10,
    borderRadius: 50,
    marginHorizontal: 10,
    padding: 10,
    paddingHorizontal: 'auto',
  },
  saveBtnContainer: {
    alignSelf: 'flex-end',
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: '#F26925',
    borderRadius: 50,
    marginHorizontal: 10,
  },
  saveBtn: {
    padding: 10,
    color: '#fff',
    fontSize: 15,
    fontFamily: 'FuturaBold',
    justifyContent: 'center',
  },
  btnContainer: {
    marginTop: 5,
    justifyContent: 'center',
  },
  buttonText2: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'FuturaBook',
    backgroundColor: '#72A4C2',
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
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 10,
    paddingVertical: 10,
    color: '#474C55',
    fontSize: 15,
    fontFamily: 'FuturaBold',
    borderRadius: 50,
  },
});

export default AddEditCurriculum;
