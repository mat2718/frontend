import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { listStyles, colors } from '../../../styles';
import { getSkillById } from '../../../redux/actions/skill-actions';

interface PropsI {
  skillid: number;
}

const BatchesSkillsListItem: React.FC<PropsI> = (props: PropsI) => {
  /** State for setting the skill name from id */
  const [skill, setSkill] = React.useState([
    {
      skillname: '',
    },
  ]);

  /** Get skills using id */
  async function fetchSkills() {
    setSkill(await getSkillById(props.skillid));
  }

  /** Run fetch skills function, cleanup after unmounting */
  React.useEffect(() => {
    fetchSkills();

    return function cleanup() {
      setSkill([]);
    };
  }, []);

  return (
    <View style={styles.listItemContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={listStyles.heading}>{skill[0].skillname}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: colors.screenBg,
    borderRadius: 25,
  },

  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  dateView: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    height: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 5,
  },

  dateText: {
    color: colors.darkGray,
    paddingLeft: 5,
  },
});

export default BatchesSkillsListItem;
