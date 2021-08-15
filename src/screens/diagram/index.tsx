import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity, Dimensions, Button,
} from 'react-native';
import { screenStyles, textStyles, buttonStyles } from '../../styles';
import { LineChart } from 'react-native-chart-kit';
import { Picker } from '@react-native-picker/picker';
import { getAllDemand, getDemandByDate, getDemandByCurrIdAndDate } from '../../redux/actions/demand-actions';
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from '../../redux/state';
import { GetAllCurricula } from '../../redux/actions/curriculum-actions';
import axios from 'axios';
import moment from 'moment';

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

  const fakeDataGen = () => {
    let dataArr = [];
    let counter = 12;

    while (counter){
      dataArr.push(Math.random() * 100)
      counter--
    }
    return dataArr;
  }
  // kai to use later when we have redux to get data on curricula and associates

  // let clientData = {
  //   data: fakeDataGen(),
  //   color: (opacity = 5) => `rgba(242, 105, 38, ${opacity})`,
  //   strokeWidth: 2
  // }

  // let revData = {
  //   data: fakeDataGen(),
  //   color: (opacity = 1) => `rgba(115, 165, 194, ${opacity})`,
  //   strokeWidth: 2
  // }

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  //calls for +6 and -6 from date.now then sort - kai with BE 
  const renderData = () => {
    return {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      data: fakeDataGen(),
      color: (opacity = 5) => `rgba(242, 105, 38, ${opacity})`, // optional
      strokeWidth: 2 // optional
    },
    {
      data: fakeDataGen(),
      color: (opacity = 1) => `rgba(115, 165, 194, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Client Demand","Associate Supply"] // optional
    };
  }

  //will use this later to see if overflow or underflow of client's demand

  const Diagram: React.FC = () => {
    const [currCurriculum, setCurriculum] = useState('All Curriculum');
    const [demandData, setDemandData] = useState([]);
    const [supplyData, setSupplyData] = useState('Supply');
    const [yearDemand, setYearDemand] = useState(0);
    const [yearSupply, setYearSupply] = useState(0);
    const dispatch = useDispatch();

    const date = new Date();
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth(), 1);
    const startDate = new Date(start.setMonth(start.getMonth() - 6)).toISOString().substring(0,10);
    const endDate = new Date(end.setMonth(end.getMonth() + 6)).toISOString().substring(0,10);


    useEffect(() => {
      // let data = getDemandByCurrIdAndDate(2,"2021-11-01", "2021-12-21");
      let data = getDemandByDate(startDate, endDate)
      setDemandData(data);
    }, [currCurriculum]);

    const filterDataByMonth = () => {
      let dataArr = getDemandByDate(startDate, endDate);
      console.log(dataArr);
    };

    const differenceView = () => {
      const result = yearDemand - yearSupply;
      if(result < 0){
        return (
            <View style={styles.resultNumbers}>
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
        <Button title="Console log DemandState" onPress={() => console.log(demandData)}/>
        <Button title="Console log SupplyState" onPress={() => console.log(supplyData)}/>
        <View style={screenStyles.titleContainer}>

          <Text style={textStyles.subHeading}>
          {currCurriculum.charAt(0).toUpperCase() +
            currCurriculum.slice(1)}{' '}
        </Text>
          <Picker
          selectedValue={currCurriculum}
          onValueChange={(currCurriculum: string) => setCurriculum(currCurriculum)}
          style={{ height: 50, width: 50,  }}
        >
          <Picker.Item label='All Curriculum' value='All Curriculum' />
          <Picker.Item label='JavaScript' value='JavaScript' />
          <Picker.Item label='Java' value='Java' />
          <Picker.Item label='Python' value='Python' />
        </Picker>
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
              <Text style={styles.statText}>20</Text>
            </View>
              
            <View style={styles.numbers}>
              <Text style={styles.statText}>Number of Associates</Text>
              <Text style={styles.statText}>15</Text>
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
    backgroundColor:'#BC7A00', //red for neg, netural color for close and green for pass
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