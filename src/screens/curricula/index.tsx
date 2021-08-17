import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { ExpandableList } from '../../components/curricula/expandable-list';
import { Transitioning, Transition } from 'react-native-reanimated';
import CurriculaListHeader from '../../components/curricula/curricula-list-header';
import { screenStyles } from '../../styles';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../redux/state';
import ICurriculum from '../../entities/curriculum';
import { GetAllCurricula } from '../../redux/actions/curriculum-actions';

/**
 * Main Screen for Curricula - shows information for all curricula
 * @returns {React.FC} - React functional component returning the flatlist of curricula
 * @author Hannah Mulato
 */

const Curricula: React.FC = () => {
  //get all curricula from the store and send it as props
  const curriculum = useSelector((state: IAppState) => state.curricula);
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);

  //initialize a transitioning effect for a card
  const transitionRef = useRef<any>(null);
  const transition = <Transition.Change interpolation='easeInOut' />;

  const onPress = () => {
    transitionRef.current.animateNextTransition();
  };

  //rendering each 'card' for each curriculum
  const renderItem = ({item}: {item: ICurriculum}) => {
    return(
       <ExpandableList curriculum={item} onPress={onPress} />
    );
  };

  //fetch updated data for refresh
  const fetchData = () => {
    dispatch(GetAllCurricula());
    setIsFetching(false);
  }
  //refresh function for flatlist
  const onRefresh = () => {
    setIsFetching(true);
    fetchData();
  }

  return (
    <Transitioning.View
      ref={transitionRef}
      transition={transition}
      style={screenStyles.safeAreaView}
    >
      {/**List of Curriculums */}
      <FlatList
        data={curriculum}
        keyExtractor={(item) => `${item.curriculumid}`}
        renderItem={renderItem}
        ListHeaderComponent={CurriculaListHeader}
        onRefresh={onRefresh}
        refreshing={isFetching}
      />
    </Transitioning.View>
  );
};

export default Curricula;
