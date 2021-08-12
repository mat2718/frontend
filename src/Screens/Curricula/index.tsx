import React, { useRef } from 'react';
import { FlatList } from 'react-native';
import { ExpandableList } from '../../Components/curricula/ExpandableList';
import { Transitioning, Transition } from 'react-native-reanimated';
import CurriculaListHeader from '../../Components/curricula/CurriculaListHeader';
import { screenStyles } from '../../styles';

//mock data for flatlist
export const DATA = [
  {
    batches: [7, 9, 3],
    createdBy: 'First Creator',
    createdOn: '2021-08-03',
    id: 0,
    lastModified: 'First Creator',
    lastModifiedBy: '2021-08-03',
    name: 'Curriculum 1',
    skills: ['JS', 'TS', 'React', 'React-Native'],
  },
  {
    batches: [1, 2, 3],
    createdBy: 'Second Creator',
    createdOn: '2021-08-03',
    id: 0,
    lastModified: 'Second Creator',
    lastModifiedBy: '2021-08-03',
    name: 'Curriculum 2',
    skills: ['JS', 'TS', 'React', 'React-Native'],
  },
  {
    batches: [3, 4, 6],
    createdBy: 'Third Creator',
    createdOn: '2021-08-04',
    id: 0,
    lastModified: 'Third Creator',
    lastModifiedBy: '2021-08-05',
    name: 'Curriculum 3',
    skills: ['JS', 'TS', 'React', 'React-Native'],
  },
  {
    batches: [3, 4, 6],
    createdBy: 'Third Creator',
    createdOn: '2018-08-16',
    id: 0,
    lastModified: 'Third Creator',
    lastModifiedBy: '2021-08-05',
    name: 'Curriculum 4',
    skills: ['JS', 'TS', 'React', 'React-Native'],
  },
];



const Curricula: React.FC = () => {
  const transitionRef = useRef<any>(null);
  const transition = <Transition.Change interpolation='easeInOut' />;

  const onPress = () => {
    transitionRef.current.animateNextTransition();
  };

  const renderItem = ({ item }: any) => {
    return <ExpandableList item={item} onPress={onPress} />;
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
        data={DATA}
        keyExtractor={(item, index) => `${item.name}${index}`}
        renderItem={renderItem}
        ListHeaderComponent={CurriculaListHeader}
      />
    </Transitioning.View>
  );
};

export default Curricula;
