import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import TrainerListHeader from '../../components/trainers/trainer-list-header';
import { screenStyles } from '../../styles';
import TrainersListItem from '../../components/trainers/trainers-list-item';
import ITrainer from '../../Entities/Trainer';
import { useSelector } from 'react-redux';
import { IAppState } from '../../redux/state';

/**
 * Main Trainer Screen - displays the trainer screen with all the trainers
 * @returns {React.FC} - React Component for the Trainer Screen
 * @param {ITrainer} interface - entity that lists properties of a trainer
 * @author Joab Smith and Imran Ilyas
 */

const MainTrainer: React.FC<ITrainer> = () =>
{
  const trainers:ITrainer[] = useSelector((state: IAppState) => state.trainers);
  const [sortedTrainer, setSortedTrainer] = useState<ITrainer[]>(trainers)

  const header = () =>
  {
    return (<TrainerListHeader setTrainerArr={setSortedTrainer}/>)
  }

  // Returns the Flatlist that consists of a trainer's information 
  const renderItem = ({ item }: { item: ITrainer }) =>
  {
    return <TrainersListItem trainer={item} />;
  };

  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      
      <FlatList
        data={sortedTrainer}
        renderItem={renderItem}
        keyExtractor={(item) => item.email}
        ListHeaderComponent={header}
      ></FlatList>
    </SafeAreaView>
  );
};

export default MainTrainer;
