import React from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import BarGraph from '../BarChart/BarChart';

interface PropsI {
  data: [
    activeBatches: number,
    totalAssociates: number,
    totalTrainers: number,
    plannedBatches: number,
    activeCurriculum: number
  ];
}

const StatsCarousel: React.FC<PropsI> = (props: PropsI) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const stats = [
    {
      title: 'Current Active Batches',
      stat: props.data[0],
      color: 'rgba(242,105,38,1)',
    },
    {
      title: 'Active Associates',
      stat: props.data[1],
      color: 'rgba(72,76,86,1)',
    },
    {
      title: 'Active Trainers',
      stat: props.data[2],
      color: 'rgba(185,185,186,1)',
    },
    {
      title: 'Planned Batches',
      stat: props.data[3],
      color: 'rgba(115, 165, 194,1)',
    },
    {
      title: 'Active Curricula',
      stat: props.data[4],
      color: 'rgba(253, 181, 21,1)',
    },
  ];

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View
        style={{
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: item.color,
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '700',
          }}
        >
          {item.stat}
        </Text>
        <Text style={{ color: '#000', textAlign: 'center' }}>{item.title}</Text>
      </View>
    );
  };

  return (
    <>
      <BarGraph
        data={[
          props.data[0],
          props.data[1],
          props.data[2],
          props.data[3],
          props.data[4],
        ]}
        index={activeIndex}
      />
      <Carousel
        data={stats}
        loop={true}
        autoplay={true}
        autoplayDelay={1000}
        autoplayInterval={4000}
        firstItem={2}
        renderItem={renderItem}
        sliderWidth={500}
        itemWidth={371}
        style={{ flex: 1, alignSelf: 'center', backgroundColor: '#B9B9BA' }}
        onSnapToItem={(index: number) => setActiveIndex(index)}
      />
    </>
  );
};

export default StatsCarousel;
