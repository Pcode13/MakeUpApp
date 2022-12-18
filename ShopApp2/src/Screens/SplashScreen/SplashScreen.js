import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { Styles } from './SplasgScreenStyle'
import  AsyncStorage  from '@react-native-async-storage/async-storage';

const imageBackgroundApp =require('../../Images/Splash.png');
const splashImage =require('../../Images/splashnew.png')
import { useSelector, useDispatch } from 'react-redux';

const SplashScreen = ({navigation}) => {

  const count = useSelector((store) => store.Loginreducers)
    useEffect(()=>{
        setTimeout(()=>{
          CheckEmail();
        },2000)

    },[])
    ;
const CheckEmail =()=>{
  // const email= await AsyncStorage.getItem('EMAIL');
  const payload= count?.users?.find((user) => user.email ===null && user.email === undefined ||user.email === '')

  if(payload){
    navigation.navigate('MainScreen')
    
  }else{
    navigation.navigate('Login')
  }
}
console.log("splash scrren",count)
console.log("splash scrren user",count?.users[0]?.password)

  return (
    <ImageBackground source={imageBackgroundApp} resizeMode="cover" style={styles.image}>
      <Image source={splashImage} resizeMode="contain"style={styles.imageDis} ></Image>
      <Text style={styles.textView}>MAYBELLINE</Text>
    </ImageBackground>
  )
}

export default SplashScreen

const styles = StyleSheet.create({

  image: {
    flex: 1,
    justifyContent: "center",
    alignContent:'center',
  
  },
  textView:{
    textAlign:'center',
    fontSize:30,
    color:'#fc0349',
    fontWeight:'700'
  },
  imageDis:{
    width:'40%',
    height:'20%',
    marginTop:-180,
    marginBottom:30,
    borderRadius:80,
   alignSelf:'center',
   
  }
})