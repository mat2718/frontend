import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

interface PropsI {
  data: [
    plannedBatches: number,
    activeBatches: number,
    totalTrainers: number,
    totalAssociates: number
  ];
}

const BatchStats: React.FC<PropsI> = (props: PropsI) => {
  const data = {
    labels: ['PB', 'AB', 'AT', 'AA'],
    datasets: [
      {
        data: [props.data[0], props.data[1], props.data[2], props.data[3]],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <>
      <BarChart
        data={data}
        width={275}
        height={275}
        fromZero={true}
        yAxisLabel=''
        yAxisSuffix=''
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <View style={styles.statView}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>PB</Text>
            </View>
            <Text style={styles.statText}>{props.data[0]} Planned Batches</Text>
          </View>
          <View style={styles.statView}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>AB</Text>
            </View>
            <Text style={styles.statText}>{props.data[1]} Active Batches </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <View style={styles.statView}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>AT</Text>
            </View>
            <Text style={styles.statText}>{props.data[2]} Active Trainers</Text>
          </View>
          <View style={styles.statView}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>AC</Text>
            </View>
            <Text style={styles.statText}>
              {props.data[3]} Active Associates
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statText: {
    paddingLeft: 5,
    fontSize: 12,
    fontWeight: '700',
    color: '#474C55',
  },

  statView: {
    width: 175,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },

  badge: {
    backgroundColor: '#474C55',
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    overflow: 'hidden',
  },

  badgeText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
});

export default BatchStats;
