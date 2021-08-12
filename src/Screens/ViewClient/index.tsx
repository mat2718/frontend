import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../components/batches/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { screenStyles, textStyles, buttonStyles, colors } from '../../styles';
import { FlatList } from 'react-native-gesture-handler';
import DemandsListItem from '../../components/demands/DemandsListItem';

interface PropsI {
  route: {
    params: {
      client: string;
    };
  };
}

/** We must fetch demand data from the client id */
/** Mock data for now */
const demands = [
  {
    client: 'Revature',
    curriculum: 'React',
    needby: Date.now(),
    quantitydemanded: 25,
  },
  {
    client: 'Revature',
    curriculum: 'React Native',
    needby: Date.now(),
    quantitydemanded: 25,
  },
  {
    client: 'Revature',
    curriculum: 'AWS',
    needby: Date.now(),
    quantitydemanded: 25,
  },
  {
    client: 'Matts BBQ and Foot Massage',
    curriculum: 'Cooking',
    needby: Date.now(),
    quantitydemanded: 25,
  },
  {
    client: 'Matts BBQ and Foot Massage',
    curriculum: 'Foot Massaging',
    needby: Date.now(),
    quantitydemanded: 25,
  },
  {
    client: 'Cognizant',
    curriculum: 'React',
    needby: Date.now(),
    quantitydemanded: 25,
  },
];

const ViewClient: React.FC<PropsI> = ({ route }) => {
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  /** Render item for Demands list */
  const renderItem = ({ item }: { item: any }) => {
    return (
      <DemandsListItem
        curriculum={item.curriculum}
        needby={item.needby}
        quantitydemanded={item.quantitydemanded}
      />
    );
  };

  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      <Header />
      <View style={screenStyles.mainView}>
        {/**Title: Curriculum */}
        <View style={screenStyles.titleContainer}>
          <View style={{ flex: 0.75 }}>
            <Text style={textStyles.heading}>{route.params.client}</Text>
          </View>
          {/** Confirm Button */}
          <TouchableOpacity style={buttonStyles.buttonContainer}>
            <Text style={buttonStyles.buttonText}>Add Demand</Text>
          </TouchableOpacity>
        </View>
        {/**Subtitle: Demands */}
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name='account-group-outline'
            size={16}
            color='#222'
            style={{ marginRight: 5 }}
          />
          <Text style={textStyles.regular}>
            {demands.filter((item) => item.client === route.params.client)
              .length + ' demands'}
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text style={textStyles.subHeading}>Demands</Text>
        </View>
        {/** Demands */}
        <FlatList
          data={demands.filter((item) => item.client === route.params.client)}
          renderItem={renderItem}
          keyExtractor={(item) => item.curriculum}
          style={{
            backgroundColor: colors.white,
            marginTop: 10,
            borderRadius: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        />

        {/** Delete button */}
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.deleteButtonText}>
            Delete {route.params.client}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  calendarView: {
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    width: '99%',
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },

  progressRingView: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    width: '98%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },

  progressText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#474c55',
  },

  deleteButton: {
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 15,
    borderColor: colors.orange,
  },

  deleteButtonText: {
    fontWeight: '700',
    color: colors.orange,
  },
});

export default ViewClient;
