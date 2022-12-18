import { StyleSheet, Text, View ,Image, Pressable} from 'react-native'
import React from 'react'

const Slides = ({label,source,onPress}) => {
  return (
    <View >
    <Pressable onPress={onPress} style={styles.containter}>
      <Image source={source} style={styles.profileImg}/>
      <Text style={styles.txt}>{label}</Text>
    </Pressable>
    </View>
  )
}

export default Slides

const styles = StyleSheet.create({
    containter:{
       flexDirection:'row'  ,
       marginHorizontal:16,
     marginTop:20
    },
    profileImg:{
        height:30,
        width:30,  
        // tintColor:'#7a42f4'      
     },
     txt:{
        marginLeft:10,
        fontSize:20,
        
        color:'#fc0349',
        fontWeight:'500'
     }
})