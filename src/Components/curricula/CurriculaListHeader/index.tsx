import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  colors,
  screenStyles,
  textStyles,
  buttonStyles,
} from '../../../styles';

const CurriculaListHeader: React.FC = () => {
  return (
    <>
      <View style={screenStyles.titleContainer}>
        <Text style={textStyles.heading}>Curricula</Text>
        <TouchableOpacity
          style={buttonStyles.buttonContainer}
          onPress={() => {}}
        >
          <Text style={buttonStyles.buttonText}>
            Add Curricula{' '}
            <MaterialCommunityIcons
              name='plus-circle-outline'
              size={20}
              color='#fff'
            />
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
  },
});

export default CurriculaListHeader;
