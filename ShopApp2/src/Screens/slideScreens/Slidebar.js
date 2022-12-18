import { StyleSheet, Text, View,Image,Alert } from 'react-native'
import React from 'react'
import { REDINFO,USER,KEY} from '../../Images/Constant'
import Slides from './compontents/Slides'
import { useSelector, useDispatch } from 'react-redux';
const Slidebar = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.Loginreducers);
  console.log("user logout",user.user)
  const count = useSelector((store) => store.Loginreducers);
const LogOutBtn=()=>{
 
    dispatch({
      type :'LOGOUT',
      
    }),
    alert("Logout Users")
    navigation.navigate('Login')
  
  }

  return (
    <View style={styles.containter}>
     <View style={styles.profileView} >
<Image source={{ isStatic: true, uri: (count.user.selectedImage) }} style={styles.profileImg}/>
<Text style={styles.profileTxt}>Pragati Veer</Text>
     </View>
     <View>
     <View style={styles.separator} />
      <View>
        <Slides label={'Profile'} source={USER} onPress={() => navigation.navigate('Profile')}/>
        <Slides label={'Change Password'} source={KEY} onPress={() => {
         
          navigation.navigate('ChangePassword')}}/>
        {user ? 
        <Slides label={'Logout'} source={REDINFO} onPress={LogOutBtn}/> :null}
      </View>
     </View>
    </View>
  )
}

export default Slidebar

const styles = StyleSheet.create({
    containter:{
        flex:1,
        backgroundColor:'#fff',

    },
    profileView:{
        justifyContent:'center',
        alignSelf:'center'
    },
    profileImg:{
       height:120,
       width:120,
        marginTop:80,
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:60
    },
    profileTxt:{
        justifyContent:'center',
        fontSize:20,
        marginTop:16,
        color:'#fff',
        fontWeight:'600'
    },
    separator: {
        height: 2,
        backgroundColor:'#fc0349',
        marginVertical:16,
        marginHorizontal:16
      },
})