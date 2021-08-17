import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { screenStyles, textStyles, buttonStyles } from '../../../styles';

/**
 * Add Skill - header component for the skills flatlist, scrolls with the flatlist
 * @returns {React.FC} - skills title and add skill button
 * @author Oriel Red Oral
 */

const SkillsListHeader: React.FC = () => {
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  return (
    <View style={screenStyles.mainView}>
      {/** Screen title */}
      <View style={screenStyles.titleContainer}>
        <Text style={textStyles.heading}>Skills</Text>

        {/** Add skill button */}
        <TouchableOpacity
          testID='button'
          style={buttonStyles.buttonContainer}
          onPress={() => navigation.navigate('AddSkill')}
        >
          <Text style={buttonStyles.buttonText}>Add Skill</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SkillsListHeader;
