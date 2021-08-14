import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, FlatList } from 'react-native';
import BatchListItem from '../../components/batches/batch-list-item';
import { screenStyles } from '../../styles';
import BatchesListHeader from '../../components/batches/batches-list-header';
import { RootStore } from '../../../App';
import { getAllBatches } from '../../redux/actions/batch-actions';

/** Basis for Entire Batch Screen */
const Batches: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = React.useState('all');
  const [isFetching, setIsFetching] = React.useState(false);
  const dispatch = useDispatch();

  /** Main item to render for the FlatList */
  const renderItem = ({ item }: { item: any }) => {
    return (
      <BatchListItem
        batchId={item.batchid}
        batchSize={item.batchsize}
        curriculumId={item.curriculumid}
        trainerId={item.trainerid}
        startDate={item.startdate}
        endDate={item.enddate}
      />
    );
  };

  const fetchData = () => {
    dispatch(getAllBatches());
    setIsFetching(false);
  };

  const onRefresh = () => {
    setIsFetching(true);
    fetchData();
  };

  /** get batches from state */
  const batches = useSelector((state: RootStore) => state.batches);
  /** Main return statement */
  return (
    <SafeAreaView style={screenStyles.safeAreaView}>
      {/** List of batches
       * Takes in the picker filter value and updates accordingly
       */}

      <FlatList
        data={(selectedFilter === 'active'
          ? batches.filter(
              (date) =>
                new Date(date.startdate).getTime() < Date.now() &&
                new Date(date.enddate).getTime() > Date.now()
            )
          : selectedFilter === 'upcoming'
          ? batches.filter(
              (date) => new Date(date.startdate).getTime() > Date.now()
            )
          : selectedFilter === 'completed'
          ? batches.filter(
              (date) => new Date(date.enddate).getTime() < Date.now()
            )
          : batches
        ).sort((a, b) => {
          return (
            new Date(a.startdate).getTime() - new Date(b.startdate).getTime()
          );
        })}
        onRefresh={onRefresh}
        refreshing={isFetching}
        renderItem={renderItem}
        keyExtractor={(item) => item.batchid.toString()}
        ListHeaderComponent={() => (
          <BatchesListHeader
            batches={batches as []}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Batches;
