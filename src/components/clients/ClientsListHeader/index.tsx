import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { screenStyles, textStyles, buttonStyles } from '../../../styles';

/** We pass the filter state from the Batches screen to this component */
interface IProps {
  selectedFilter: any;
  setSelectedFilter: any;
}

const ClientsListHeader: React.FC<IProps> = (props: IProps) => {
  /** Navigation stuff */
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

const styles = StyleSheet.create({
  plannedBatchesTable: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: '90%',
    backgroundColor: '#fafafa',
    borderRadius: 25,
  },
});

export default ClientsListHeader;
