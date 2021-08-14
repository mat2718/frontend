import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { buttonStyles, listStyles } from '../../../styles';
import ICurriculum from '../../../entities/curriculum';
import { DeleteCurriculum } from '../../../redux/actions/curriculum-actions';
interface IProps {
  curriculum: ICurriculum;
  onPress: any;
}

/**
 * Curriculum Expandable Flatlist- sub component of Curricula screen displaying list of curricula
 * @param {IProps} interface- properties of curriculum entity and onPress event
 * @returns {React.FC} - React component returning a list of curricula
 * @author Hannah Mulato
 */

export const ExpandableList: React.FC<IProps> = ({ curriculum, onPress }) => {
  //Navigation initialization
  type curriculaScreenProp = StackNavigationProp<
    RootStackParamList,
    'Main'
  >;
  const navigation = useNavigation<curriculaScreenProp>();

  //State for expansion of each curriculum view
  const [expanded, setExpanded] = useState(false);
  const [icon, setIcon] = useState(
    <MaterialCommunityIcons
      name='chevron-up'
      size={30}
      color='#F26925'
      style={styles.icon}
    />
  );
  
  //onPress event allowing for icon change and expanding transition
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

  return (
    <TouchableOpacity
      style={listStyles.listItemContainer}
      onPress={onCurriculumPress}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text style={listStyles.heading}>{curriculum.curriculumname}</Text>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={listStyles.subHeading}>Created On: </Text>
        <Text style={listStyles.textRegular}>{curriculum.createdOn}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={listStyles.subHeading}>Created By: </Text>
        <Text style={listStyles.textRegular}>{curriculum.createdBy}</Text>
      </View>

      {expanded && (
        <>
          <View style={styles.textContainer}>
            <Text style={listStyles.subHeading}>Last Modified On: </Text>
            <Text style={listStyles.textRegular}>{curriculum.modifiedOn}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={listStyles.subHeading}>Last Modified By: </Text>
            <Text style={listStyles.textRegular}>{curriculum.modifiedBy}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={listStyles.subHeading}>Skills: </Text>
            <Text style={listStyles.textRegular}>{curriculum.skillIdArr}</Text>
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
              onPress={() => {DeleteCurriculum(curriculum)}}
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
