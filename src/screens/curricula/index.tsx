import React, { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { ExpandableList } from '../../components/curricula/expandable-list';
import { Transitioning, Transition } from 'react-native-reanimated';
import CurriculaListHeader from '../../components/curricula/curricula-list-header';
import { screenStyles } from '../../styles';
import { GetAllCurricula } from '../../redux/actions/curriculum-actions';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../redux/state';
import ICurriculum from '../../entities/curriculum';

/**
 * Main Screen for Curricula - shows information for all curricula
 * @returns {React.FC} - React Functional Component
 * @author Hannah Mulato
 */

const Curricula: React.FC = () => {
  //get all curricula from the store and send it as props
  const [curriculum, setCurriculum] = useState<ICurriculum[]>([])
  
  //initialize a transitioning effect for a card
  const transitionRef = useRef<any>(null);
  const transition = <Transition.Change interpolation='easeInOut' />;

  const onPress = () => {
    transitionRef.current.animateNextTransition();
  };

  const renderItem = ({ item }: { item: ICurriculum }) => {
    return(
       <ExpandableList curriculum={item}  onPress={onPress} />
    );
  };

  //const navigation = useNavigation();

  return (
    <Transitioning.View
      ref={transitionRef}
      transition={transition}
      style={screenStyles.safeAreaView}
    >
      {/**List of Curriculums */}
      <FlatList
        data={curriculum}
        keyExtractor={(item) => item.curriculumname}
        renderItem={renderItem}
        ListHeaderComponent={CurriculaListHeader}
      />
    </Transitioning.View>
  );
};

export default Curricula;
