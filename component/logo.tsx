import React from "react"
import {Image, StyleSheet, View} from 'react-native'

//Revature logo render for header for navigator- Kai
const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('../assets/images/RevatureLogo.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignContent: "center",
    justifyContent: "center",
  },

  logo:{
    height: 50,
    marginBottom:15
  }
})

export default Logo;