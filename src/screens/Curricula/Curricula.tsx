import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Curricula: React.FC = () => {
    //mock data for flatlist
    const DATA = [{
        'batches': [{
            "associate": 0,
            "bid": 0,
            "endDate": "endDate0",
            "startDate": "startDate0",
            "trainer": {
              "batchList": [
                null
              ],
              "email": "email0",
              "trainerFirst": "trainerFirst0",
              "trainerId": 0,
              "trainerLast": "trainerLast0"
            }
          }
        ],
        'createdBy': 'First Creator',
        'createdOn': "2021-08-03",
        'id': 0,
        'lastModified':	'First Creator',
        'lastModifiedBy': '2021-08-03',
        'name':	'Curriculum 1',
        'skills': [
            {
              "currList": [
                null
              ],
              "skillId": 0,
              "skillName": "TypeScript"
            }
          ]
    },
    {
        'batches': [{
            "associate": 0,
            "bid": 0,
            "endDate": "endDate0",
            "startDate": "startDate0",
            "trainer": {
              "batchList": [
                null
              ],
              "email": "email0",
              "trainerFirst": "trainerFirst0",
              "trainerId": 0,
              "trainerLast": "trainerLast0"
            }
          }
        ],
        'createdBy': 'Second Creator',
        'createdOn': "2021-08-03",
        'id': 0,
        'lastModified': 'Second Creator'	,
        'lastModifiedBy': '2021-08-03',
        'name':	'Curriculum 2',
        'skills': [
            {
              "currList": [
                null
              ],
              "skillId": 0,
              "skillName": "Cloud-Native"
            }
          ]
    },
    {
      'batches': [{
          "associate": 0,
          "bid": 0,
          "endDate": "endDate0",
          "startDate": "startDate0",
          "trainer": {
            "batchList": [
              null
            ],
            "email": "email0",
            "trainerFirst": "trainerFirst0",
            "trainerId": 0,
            "trainerLast": "trainerLast0"
          }
        }
      ],
      'createdBy': 'Third Creator',
      'createdOn': "2021-08-04",
      'id': 0,
      'lastModified': 'Third Creator'	,
      'lastModifiedBy': '2021-08-05',
      'name':	'Curriculum 3',
      'skills': [
          {
            "currList": [
              null
            ],
            "skillId": 0,
            "skillName": "Cloud-Native"
          }
        ]
  }];

    //renderItem
    const renderItem = ({item}: {item: any}) => {
        return(
        <View style={styles.list}>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
                <Text style={styles.textName}>{item.name}</Text>
                <MaterialCommunityIcons name="chevron-up" size={30} color="#F26925" style={styles.icon}/>
            </View>
            <View style={styles.rows}>
                <Text style={styles.title2}>Created On: </Text>
                <Text style={styles.otherInfo}>{item.createdOn}</Text>
            </View>
            <View style={styles.rows}>
                <Text style={styles.title2}>Created by: </Text>
                <Text style={styles.otherInfo}>{item.createdBy}</Text>
            </View>
            <View style={styles.rows}>
                <Text style={styles.title2}>Last modified: </Text>
                <Text style={styles.otherInfo}>{item.lastModified}</Text>
            </View>
            <View style={styles.rows}>
                <Text style={styles.title2}>Date modified: </Text>
                <Text style={styles.otherInfo}>{item.lastModifiedBy}</Text>
            </View>
            <View style={styles.button2Container}>
                <TouchableOpacity style={styles.button}> 
                  <Text style={styles.buttonText2}>EDIT</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/**Where header should be*/}

            {/**Title*/}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>CURRICULUMS</Text>
            </View>

            {/**Add Curriculum button */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>ADD CURRICULUM</Text>
                </TouchableOpacity>
            </View>

            {/**List of Curriculums */}
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    alignItems: 'center', 
    paddingTop: 50,
    flex: 1
  },
  titleContainer: {
    color: '#474C55',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    color: '#474C55',
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end', 
    paddingVertical:10,
    paddingHorizontal:10
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: '#72A4C2',
    borderRadius: 10
  },
  buttonText: {
    padding: 10,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15
  },
  list: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 8,
  },
  textName: {
    fontSize: 20,
    color: '#474C55',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingRight: 30
  },
  title2: {
    fontSize: 15,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: '#474C55'
  },
  otherInfo: {
    fontSize: 15,
    alignSelf: 'center'
  },
  rows: {
    flexDirection: 'row',
    paddingVertical: 2
  },
  icon: {
    alignSelf: 'flex-end',
    paddingLeft: 120,
  },
  button2Container: {
    alignSelf: 'flex-end',
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: '#72A4C2',
    borderRadius: 10
  },
  buttonText2: {
    padding: 2,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15
  },
})

export default Curricula;