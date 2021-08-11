import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { ProgressChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../components/batches/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  badgesStyles,
  screenStyles,
  textStyles,
  buttonStyles,
  colors,
} from '../../styles';
import { FlatList } from 'react-native-gesture-handler';
import DemandsListItem from '../../components/demands/DemandsListItem';

interface PropsI {
  route: {
    params: {
      client: string;
      demand: [];
      needBy: number;
      quantityDemanded: number;
    };
  };
}

const ViewClient: React.FC<PropsI> = ({ route }) => {
  /** Navigation stuff */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();

  /** Render item for Demands list */
  const renderItem = ({ item }: { item: any }) => {
    return <DemandsListItem demand={item} />;
  };

  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      <Header />
      <View style={screenStyles.mainView}>
        {/**Title: Curriculum */}
        <View style={screenStyles.titleContainer}>
          <Text style={textStyles.heading}>{route.params.client}</Text>
          {/** Confirm Button */}
          <TouchableOpacity style={buttonStyles.buttonContainer}>
            <Text style={buttonStyles.buttonText}>Add Demand</Text>
          </TouchableOpacity>
        </View>
        {/**Subtitle: Trainer */}
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name='account-group-outline'
            size={16}
            color='#222'
            style={{ marginRight: 5 }}
          />
          <Text style={textStyles.regular}>
            {route.params.quantityDemanded + ' Demanded Quantity'}
          </Text>
        </View>

        {/**Body: Batch information */}
        <View>
          {/**SubBody: Number of Associates */}
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons
              name='clock-outline'
              size={16}
              color='#222'
              style={{ marginRight: 5 }}
            />
            <Text style={textStyles.regular}>
              {'by ' + new Date(route.params.needBy).toDateString()}
            </Text>
          </View>
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
          data={route.params.demand}
          renderItem={renderItem}
          keyExtractor={(item) => item}
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
