import React from 'react';
import { View, Text } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

  interface PropsI{
    data: [
    activeBatches: number,
    totalAssociates: number,
    totalTrainers: number,
    plannedBatches: number,
    activeCurriculum: number,
    ]
    index: any;
}

const BarGraph: React.FC<PropsI> = (props: PropsI) => {
    const [currentBar, setCurrentBar] = React.useState(props.data[0]);
    const opacity = 1;

    const data = [
        {
            name: "Active Batches",
            population: props.data[0],
            color: props.index === 0 ? 'rgba(242,105,38,1)' : 'rgba(242,105,38,0.5)'
        },
        {
            name: "Average Active Associates",
            population: props.data[1],
            color: props.index === 1 ? 'rgba(72,76,86,1)' : 'rgba(72,76,86,0.5)'
        },
        {
            name: "Active Trainers",
            population: props.data[2],
            color: props.index === 2 ? 'rgba(185,185,186,1)' : 'rgba(185,185,186,0.5)'
        },
        {
            name: "Planned Batches",
            population: props.data[3],
            color: props.index === 3 ? 'rgba(115, 165, 194,1)' : 'rgba(115, 165, 194,0.5)'
        },
        {
            name: "Active Curriculums",
            population: props.data[4],
            color: props.index === 4 ? 'rgba(253, 181, 21,1)' : 'rgba(253, 181, 21,0.5)'
        }
      ];

    const chartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#ffffff",
        backgroundGradientToOpacity: 0.5,
        fillShadowGradient:'#222',
        fillShadowGradientOpacity:1,
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        },
    };
      
    return (
        <View>
            <PieChart
                data={data}
                width={500}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[110, 0]}
                absolute
                hasLegend={false}
            />
        </View>
    )
}

export default BarGraph
