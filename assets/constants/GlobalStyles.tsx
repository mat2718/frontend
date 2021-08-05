import React from 'react'
import {StyleSheet} from 'react-native'
import colors from './colors'
const GlobalStyles = StyleSheet.create({

button:{
    backgroundColor:colors.primaryOrange,
    borderRadius:300,
    padding:5,
    color:colors.primaryWhite,
   
},
container:{
    flex:.75,
    justifyContent:"space-evenly",
},
listItem:{
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingLeft: 30,
    marginBottom: 10,
    width: '90%',
    shadowColor:colors.primaryGray,
    shadowOffset: 
        {
      width: 0,
      height: 2,
        },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 35,
    backgroundColor:colors.primaryWhite,
    
        
  },
  dropDown:{
  borderWidth:1,
  padding:15,
  }

});





export default GlobalStyles;