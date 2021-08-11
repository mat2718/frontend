import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { screenStyles, textStyles, buttonStyles } from '../../../styles';

const CurriculaListHeader: React.FC = () => {
  return (
    <>
      <View style={screenStyles.titleContainer}>
        <Text style={textStyles.heading}>Curricula</Text>
        <TouchableOpacity
          style={buttonStyles.buttonContainer}
          onPress={() => {
            /** must define a function here */
          }}
        >
          <Text style={buttonStyles.buttonText}>Add Curricula</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CurriculaListHeader;
