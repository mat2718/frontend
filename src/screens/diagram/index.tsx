import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,Dimensions, Button} from 'react-native';
import { screenStyles, textStyles, buttonStyles } from '../../styles';
import { LineChart } from 'react-native-chart-kit';
import { Picker } from '@react-native-picker/picker';
import { getAllDemand, getDemandByDate, getDemandByCurrIdAndDate, getDemandByCurrId, getDemandByClientId, getDemandById} from '../../redux/actions/demand-actions';
import { GetCurriculum } from '../../redux/actions/curriculum-actions';
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from '../../redux/state';
import moment from 'moment';



  const fakeDataGen = () => {
    let dataArr = [];
    let counter = 12;

    while (counter){
      dataArr.push(Math.random() * 100)
      counter--
    }
    return dataArr;
  }
  
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  //calls for +6 and -6 from date.now then sort - kai with BE 
  // const renderData = () => {
  //   return {
  // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  // datasets: [
  //   {
  //     data: fakeDataGen(),
  //     color: (opacity = 5) => `rgba(242, 105, 38, ${opacity})`, // optional
  //     strokeWidth: 2 // optional
  //   },
  //   {
  //     data: fakeDataGen(),
  //     color: (opacity = 1) => `rgba(115, 165, 194, ${opacity})`, // optional
  //     strokeWidth: 2 // optional
  //   }
  // ],
  // legend: ["Client Demand","Associate Supply"] // optional
  //   };
  // }
  

  const Diagram: React.FC = () => {
    const allCurricula = useSelector((state: IAppState) => state.curricula)
    const allBatches = useSelector((state: IAppState) => state.batches)
    const [currCurriculum, setCurriculum] = useState('All Curriculum');
    const [demandData, setDemandData] = useState([]);

    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    useShadowColorFromDataset: true, // optional
    fromZero:true,
    };

    const date = new Date();
    const start = moment(new Date()).format("YYYY-MM-01");
    const startDate = moment(moment(start).subtract(6,"M")).format("YYYY-MM-01");
    const endDate = moment(moment(start).add(6,"M")).format("YYYY-MM-01")

    useEffect(() => {
      getDemandByDate(startDate, endDate).then((res) => setDemandData(res))
      ;
    }, [currCurriculum]);

    
    const renderData = () => {
    return {
  labels: renderLabel(),
  datasets: [
    {
      data: filterDemandDataByMonth(),
      color: (opacity = 5) => `rgba(242, 105, 38, ${opacity})`, // optional
      strokeWidth: 2 // optional
    },
    {
      data: filterSupplyDataByMonth(),
      color: (opacity = 1) => `rgba(115, 165, 194, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Client Demand","Associate Supply"] // optional
    };
  }
    //renders the label months we need to see -6 and +6 months for the graph
    const renderLabel = () => {
      let labels = [];
      let month = date.getMonth() - 6; //number
      let counter = 13;

      while(counter){
        month = month % 12
        labels.push(months[month++])
        counter--;
      }
      return labels;
    }

    const filterSupplyDataByMonth = () => {
      let supplyObj = {};
      let month = moment(moment(start).subtract(6,"M")).format("YYYY-MM");
      let counter = 13;

      while(counter){
        supplyObj[month] = 0
        month = moment(moment(month).add(1, "M")).format("YYYY-MM");
        counter--;
      }

      for(const data of allBatches){
        const key = moment(data.enddate).format("YYYY-MM");
        supplyObj[key] += data.batchsize;
      };
      const values:number[] = Object.values(supplyObj);
      return values;
    };

    const filterDemandDataByMonth = () => {
      let demandObj = {};
      let month = moment(moment(start).subtract(6,"M")).format("YYYY-MM");
      let counter = 13;

      while(counter){
        demandObj[month] = 0
        month = moment(moment(month).add(1, "M")).format("YYYY-MM");
        counter--;
      }
  
      for(const data of demandData){
        const key = moment(data.needby).format("YYYY-MM");
        demandObj[key] += data.quantitydemanded;
        ;
      };
      const values:number[] = Object.values(demandObj);
      return values;
    };

    const sumOf = (array:number[]) => {
      let sum = 0;

      for(const num of array){
        sum += num;
      }
      return sum;
    }

    const differenceView = () => {
      let demand = sumOf(filterDemandDataByMonth());
      let supply = sumOf(filterSupplyDataByMonth());
      const result =  supply - demand;
      if(result < 0){
        return (
            <View style={styles.badResultNumbers}>
              <Text style={styles.statText}>UNDER</Text>
              <Text style={styles.statText}>{result}</Text>
            </View>
        )
      } else if (result === 0){
        return (
            <View style={styles.resultNumbers}>
              <Text style={styles.statText}>MEET</Text>
              <Text style={styles.statText}>{result}</Text>
            </View>
        )
      } else {
        return (
            <View style={styles.resultNumbers}>
              <Text style={styles.statText}>OVERFLOW</Text>
              <Text style={styles.statText}>{result}</Text>
            </View>
        )
      }
    }
    
    return (
      <View style={screenStyles.mainView}>
        <View style={screenStyles.titleContainer}>

          <Text style={textStyles.subHeading}>
          All Curriculum
        </Text>
        </View>

        <View style={styles.progressRingView}>
          <LineChart
            data={renderData()}
            width={screenWidth - 50}
            height={300}
            chartConfig={chartConfig}
            style={styles.lineChart}
          />
        </View>

        <View style={styles.infoContainer}>

          <View style={styles.curriculaNameContainer}><Text style={styles.curriculaName}>{`${currCurriculum} - YTD`}</Text></View>

          <View style={styles.numbersContainer}>

            <View style={styles.numbers}>
              <Text style={styles.statText}>Number of Demanded</Text>
              <Text style={styles.statText}>{sumOf(filterDemandDataByMonth())}</Text>
            </View>
              
            <View style={styles.numbers}>
              <Text style={styles.statText}>Number of Associates</Text>
              <Text style={styles.statText}>{sumOf(filterSupplyDataByMonth())}</Text>
            </View>
              
            {differenceView()}
          </View>
        </View>

      </View>
    )
  }

  export default Diagram;

const styles = StyleSheet.create({
  lineChart: {
    borderRadius:25,
  },
  infoContainer: {
    flexDirection:"column",
    marginTop:20,
    padding:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  }, 
  curriculaNameContainer:{
    // alignItems: 'center',
    marginBottom:10
  }, 
  numbersContainer:{
    flexDirection:"column",
  },

  numbers:{
    flexDirection:"row",
    justifyContent:'space-between',
    padding:3
  },
  resultNumbers:{
    padding:7,
    flexDirection:"row",
    justifyContent:'space-between',
    backgroundColor:'#3B8300',
    borderRadius: 25,
  },
  badResultNumbers:{
    padding:7,
    flexDirection:"row",
    justifyContent:'space-between',
    backgroundColor:'#F26925',
    borderRadius: 25,
  },
  progressRingView: {
    marginTop:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },

  statText: {
    paddingLeft: 5,
    marginBottom:3,
    fontSize: 16,
    fontWeight: '700',
    color: '#474C55',
  },

  curriculaName:{
    paddingLeft: 5,
    fontSize: 20,
    fontWeight: '700',
    color: '#474C55',
  }
})