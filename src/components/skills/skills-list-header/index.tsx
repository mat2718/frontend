import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { screenStyles, textStyles, buttonStyles } from '../../../styles';

/** We pass the filter state from the Batches screen to this component */
interface IProps {
  selectedFilter: any;
  setSelectedFilter: any;
}

const SkillsListHeader: React.FC<IProps> = (props: IProps) => {
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  return (
    <View style={screenStyles.mainView}>
      {/** Screen title */}
      <View style={screenStyles.titleContainer}>
        <Text style={textStyles.heading}>Skills</Text>

        {/** Add batch button */}
        <TouchableOpacity
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
