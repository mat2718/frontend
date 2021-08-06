import React from 'react'
import {StyleSheet} from 'react-native'
import colors from './colors'
const GlobalStyles = StyleSheet.create({

button:{
    backgroundColor:colors.primaryOrange,
    borderRadius:30,
    padding:10,
    color:colors.primaryWhite,
    justifyContent:"center",
    alignSelf:"center",
    textAlign:"center"
   
},
container:{
    flex:1,
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
  color:colors.primaryOrange,  
  borderWidth:1,
  margin:10,
  padding:15,
  },
  calender:{
  
    height:150,
    width:300, 
    
    
  },
  textInput:{
    backgroundColor:colors.secondaryGray,
    borderWidth:1,
    padding:2,
    margin:20,
    height:30,
    textAlign:"center",
    

  },
  h1:{
    
    fontSize:18,
    backgroundColor:colors.primaryOrange,
    textAlign:"center",
    color:colors.primaryWhite,
    marginHorizontal:"10%",
    marginBottom:10,
  

    
  },
  h2:{
    fontSize:14,
    color:colors.primaryGray,
   
  }
  

});





export default GlobalStyles;