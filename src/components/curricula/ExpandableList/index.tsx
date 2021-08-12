import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { buttonStyles, listStyles } from '../../../styles';

interface IProps {
  item: any;
  onPress: any;
}

export const ExpandableList: React.FC<IProps> = ({ item, onPress }) => {
  const [expanded, setExpanded] = useState(false);
  const [icon, setIcon] = useState(
    <MaterialCommunityIcons
      name='chevron-up'
      size={30}
      color='#F26925'
      style={styles.icon}
    />
  );

  /** Navigation stuff */
  type CurriculaScreenProp = StackNavigationProp<
    RootStackParamList,
    'Curricula'
  >;
  const navigation = useNavigation<CurriculaScreenProp>();

  const onCurriculumPress = () => {
    onPress();
    setExpanded(!expanded);
    if (expanded === true) {
      setIcon(
        <MaterialCommunityIcons
          name='chevron-up'
          size={30}
          color='#F26925'
          style={styles.icon}
        />
      );
    }

    if (expanded === false) {
      setIcon(
        <MaterialCommunityIcons
          name='chevron-down'
          size={30}
          color='#F26925'
          style={styles.icon}
        />
      );
    }
  };

  const batches = item.batches.join(', ');
  const skills = item.skills.join(', ');

  return (
    <TouchableOpacity
      style={listStyles.listItemContainer}
      onPress={onCurriculumPress}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text style={listStyles.heading}>{item.name}</Text>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={listStyles.subHeading}>Created On: </Text>
        <Text style={listStyles.textRegular}>{item.createdOn}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={listStyles.subHeading}>Created By: </Text>
        <Text style={listStyles.textRegular}>{item.createdBy}</Text>
      </View>

      {expanded && (
        <>
          <View style={styles.textContainer}>
            <Text style={listStyles.subHeading}>Last Modified On: </Text>
            <Text style={listStyles.textRegular}>{item.lastModified}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={listStyles.subHeading}>Last Modified By: </Text>
            <Text style={listStyles.textRegular}>{item.lastModifiedBy}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={listStyles.subHeading}>Batches: </Text>
            <Text style={listStyles.textRegular}>{batches}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={listStyles.subHeading}>Skills: </Text>
            <Text style={listStyles.textRegular}>{skills}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={buttonStyles.buttonCompactOutlineContainer}
              onPress={() => navigation.navigate('AddEditCurriculum')}
            >
              <Text style={buttonStyles.buttonSecondaryText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={buttonStyles.buttonCompactContainer}
              onPress={() => {
                /** must define a function here */
              }}
            >
              <Text style={buttonStyles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 8,
  },
  container: { flexDirection: 'row' },
  textContainer: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  details: { margin: 10 },
  curriculumName: {
    fontSize: 20,
    color: '#474C55',
    fontFamily: 'FuturaBold',
    alignSelf: 'flex-start',
  },
  text: {
    opacity: 0.7,
    flexDirection: 'row',
    paddingVertical: 2,
    fontFamily: 'FuturaBook',
    fontSize: 15,
  },
  icon: {
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    marginRight: 0,
  },
  title2: {
    fontSize: 18,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: '#474C55',
    fontFamily: 'FuturaBook',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: '#72A4C2',
    borderRadius: 50,
  },
  buttonText: {
    padding: 10,
    color: '#fff',
    fontSize: 15,
    fontFamily: 'FuturaBold',
  },
  deleteButton: {
    alignSelf: 'flex-end',
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: '#F26925',
    borderRadius: 50,
    marginLeft: 10,
  },
});
