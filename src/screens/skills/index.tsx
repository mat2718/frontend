import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { screenStyles } from '../../styles';
import SkillsListHeader from '../../components/skills/skills-list-header';
import SkillsListItem from '../../components/skills/skills-list-item';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../App';
import { useDispatch } from 'react-redux';
import { getAllSkills } from '../../redux/actions/skill-actions';

/**
 * Skills - main screen that displays a list of skills
 * @returns {React.FC} - entire screen with the list of skills
 * @author Oriel Red Oral
 */

const Clients: React.FC = () => {
  const [isFetching, setIsFetching] = React.useState(false);
  const dispatch = useDispatch();

  /** Main item to render for the FlatList */
  const renderItem = ({ item }: { item: any }) => {
    return <SkillsListItem skillname={item.skillname} skillid={item.skillid} />;
  };

  /** Get skills from store */
  const skills = useSelector((state: RootStore) => state.skills).sort((a, b) =>
    a.skillname > b.skillname ? 1 : -1
  );

  /** fetch updated data for refresh function */
  const fetchData = () => {
    dispatch(getAllSkills());
    setIsFetching(false);
  };

  /** refresh function for flatlist */
  const onRefresh = () => {
    setIsFetching(true);
    fetchData();
  };

  /** Main return statement */
  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      {/** List of skills
       * Takes in the picker filter value and updates accordingly
       */}

      <FlatList
        onRefresh={onRefresh}
        refreshing={isFetching}
        data={skills}
        renderItem={renderItem}
        keyExtractor={(item) => item.skillid.toString()}
        ListHeaderComponent={SkillsListHeader}
      />
    </SafeAreaView>
  );
};

export default Clients;
