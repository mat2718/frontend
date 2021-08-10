import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native';
import Header from '../../components/batches/Header';
import { Picker } from '@react-native-picker/picker';
import {
  badgesStyles,
  screenStyles,
  textStyles,
  buttonStyles,
} from '../../styles';

interface PropsI {
  route: {
    params?: {
      batchId: number;
      curriculum: string;
      trainer: string;
      associates: number;
      startDate: any;
      endDate: any;
    };
  };
}

/** mock data for curriculum */
const data = ['React Native/Cloud Native', 'Java', 'Python'];

const AddEditBatch: React.FC<PropsI> = ({ route }) => {
  const [selectedFilter, setSelectedFilter] = React.useState('all');

  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      <Header />
      <ScrollView style={screenStyles.mainView}>
        {/** Screen title text */}
        <Text style={textStyles.heading}>
          {route.params ? 'Edit batch' : 'Add batch'}
        </Text>
        {/** Form view */}
        <View>
          <Text>Curriculum</Text>
          <Picker
            selectedValue={selectedFilter}
            mode='dropdown'
            onValueChange={(itemValue: any, itemIndex: any) =>
              setSelectedFilter(itemValue)
            }
            style={{ width: '100%', height: 50 }}
          >
            {data.map((curr) => {
              return <Picker.Item label={curr} value={curr} key={curr} />;
            })}
          </Picker>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddEditBatch;
