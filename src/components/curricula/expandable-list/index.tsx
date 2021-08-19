import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, listStyles } from '../../../styles';
import ICurriculum from '../../../entities/curriculum';
interface IProps {
  curriculum: ICurriculum;
  onPress: any;
}

/**
 * Curriculum Expandable Flatlist - sub component of Curricula screen displaying list of curricula
 * @param {IProps} interface- properties of curriculum entity and onPress event
 * @returns {React.FC} - React component returning an expandable view of curricula
 * @author Hannah Mulato
 */

export const ExpandableList: React.FC<IProps> = ({ curriculum, onPress }) => {
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

  //variables for more understandable data strings
  let createdDate = new Date(curriculum.createdon).toDateString();
  let modifiedDate = new Date(curriculum.lastmodified).toDateString();
  let skillsarr = curriculum.skillnamearr.join(', ');

  //onPress event allowing for icon change and expanding transition
  const onCurriculumPress = () => {
    onPress();
    setExpanded(!expanded);
    // changes icon depending on if the button is clicked
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
        <Text style={listStyles.curriculaSubHeading}>Created On: </Text>
        <Text style={listStyles.subHeading}>{createdDate}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={listStyles.curriculaSubHeading}>Created By: </Text>
        <Text style={listStyles.subHeading}>{curriculum.createdby}</Text>
      </View>

      {/* Display more information about curriculum upon press */}
      {expanded && (
        <>
          <View style={styles.textContainer}>
            <Text style={listStyles.curriculaSubHeading}>
              Last Modified On:{' '}
            </Text>
            <Text style={listStyles.subHeading}>{modifiedDate}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={listStyles.curriculaSubHeading}>
              Last Modified By:{' '}
            </Text>
            <Text style={listStyles.subHeading}>
              {curriculum.lastmodifiedby}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={listStyles.curriculaSubHeading}>Skills: </Text>
            <Text style={listStyles.subHeading}>{skillsarr}</Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  icon: {
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    marginRight: 0,
  },
  textRegular: {
    fontSize: 12,
    color: colors.darkGray,
    fontFamily: 'FuturaBook',
    fontWeight: '700',
    flexWrap: 'wrap',
    flex: 1,
  },
});
