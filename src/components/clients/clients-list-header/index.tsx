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

/**
 * Client List Header - displays the header component for the Client Screen
 * @param {IProps} props - properties for filter
 * @returns {React.FC} - react component with Add Client button that naviagates to AddClient
 * @author Matthew Otto and Oriel Red Oral
 */

const ClientsListHeader: React.FC<IProps> = (props: IProps) => {
  /** Navigation */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  return (
    <View style={screenStyles.mainView}>
      {/** Screen title */}
      <View style={screenStyles.titleContainer}>
        <Text style={textStyles.heading}>Clients</Text>

        {/** Add batch button */}
        <TouchableOpacity
          style={buttonStyles.buttonContainer}
          onPress={() => navigation.navigate('AddClient')}
        >
          <Text style={buttonStyles.buttonText}>Add Client</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClientsListHeader;
