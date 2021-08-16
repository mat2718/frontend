import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { screenStyles, textStyles, buttonStyles } from '../../../styles';
import { RootStackParamList } from '../../../types';

/**
 * Curriculum Screen Header - displays the title of the page and create curriculum button
 * @returns {React.FC} - React Functional Component for Curriculum screen and routing to add curriculum screen
 * @author Hannah Mulato
 */

const CurriculaListHeader: React.FC = () => {
  type curriculumScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<curriculumScreenProp>();
  return (
    <View style={screenStyles.mainView}>
      <View style={screenStyles.titleContainer}>
        <Text style={textStyles.heading}>Curricula</Text>
        <TouchableOpacity
          style={buttonStyles.buttonContainer}
          onPress={() => navigation.navigate('AddEditCurriculum')}
        >
          <Text style={buttonStyles.buttonText}>Add Curricula</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CurriculaListHeader;
