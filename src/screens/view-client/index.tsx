import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { screenStyles, textStyles, buttonStyles, colors } from '../../styles';
import { FlatList } from 'react-native-gesture-handler';
import DemandsListItem from '../../components/demands/demands-list-item';

interface PropsI {
  route: {
    params: {
      clientid: number;
      clientname: string;
    };
  };
}

/** We must fetch demand data from the client id */
/** Mock data for now */

const ViewClient: React.FC<PropsI> = ({ route }) => {
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  /** Render item for Demands list */
  const renderItem = ({ item }: { item: any }) => {
    return (
      <DemandsListItem
        curriculumid={item.curriculumid}
        needby={item.needby}
        quantitydemanded={item.quantitydemanded}
      />
    );
  };

  /** Get demands */
  const demandsState = useSelector((state: RootStore) => state.demands).sort(
    (a, b) => b.quantitydemanded - a.quantitydemanded
  );
  const demands = demandsState.filter(
    (demand) => demand.clientid === route.params.clientid
  );

  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      <View style={screenStyles.mainView}>
        {/**Title: Curriculum */}
        <View style={screenStyles.titleContainer}>
          <View style={{ flex: 0.75 }}>
            <Text style={textStyles.heading}>{route.params.clientname}</Text>
          </View>
          {/** Confirm Button */}
          <TouchableOpacity style={buttonStyles.buttonContainer}>
            <Text
              style={buttonStyles.buttonText}
              onPress={() => navigation.navigate('AddDemand', route.params)}
            >
              Add Demand
            </Text>
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
          <Text style={textStyles.regular}>{demands.length + ' demands'}</Text>
        </View>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text style={textStyles.subHeading}>Demands</Text>
        </View>
        {/** Demands */}
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            marginTop: 10,
            borderRadius: 25,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <FlatList
            data={demands}
            renderItem={renderItem}
            keyExtractor={(item) => item.demandid.toString()}
          />
        </View>
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
