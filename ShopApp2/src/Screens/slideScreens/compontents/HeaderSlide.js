import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const HeaderSlide = ({source,label,onPress,theme,customStyle}) => {
    
  return (
    <View style={styles.contView}>
      <TouchableOpacity
       onPress={onPress}>
      <Image source={source} style={styles.LeftView} />
      </TouchableOpacity>
      <View>

      <Text style={[styles.profileTxtv,customStyle]}>{label}</Text>
      </View>
     
      </View>
  )
}

export default HeaderSlide

const styles = StyleSheet.create({
    LeftView:{
        width:23,
        height:23,
        marginTop:50,
        marginLeft:16,
        tintColor:'#fff'

    },
    profileTxtv:{
        justifyContent:'center',
        fontSize:20,
        color:'#fff',
        fontWeight:'700',
        marginTop:48,
        marginLeft:90,
     marginHorizontal:16
       
    },
    contView:{
        
        backgroundColor:'#fc0349',
        flexDirection:'row',
       
    },
})