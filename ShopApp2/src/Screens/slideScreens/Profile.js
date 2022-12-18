import { StyleSheet, Text, View,Image,  } from 'react-native'
import React, { useEffect, useState } from 'react'

import {BACKICON,USER,SPLASH_LOGO} from '../../Images/Constant'

import HeaderSlide from './compontents/HeaderSlide'
import { ScrollView } from 'react-native-gesture-handler'
import  AsyncStorage  from '@react-native-async-storage/async-storage';

import { NavigationContainer , useIsFocused} from '@react-navigation/native';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../AuthScreen/Redux/store'
import reducers from '../AuthScreen/Redux/reducers'
const Profile = ({navigation}) => {
const [UserDataStore,setUserDataStore]=useState('')
    const isfoused =useIsFocused();

//    const users= useSelector(state => state.users);
   const count = useSelector((store) => store.Loginreducers);
useEffect(()=>{
    getStore()
},[])
console.log("Image data",count.user.selectedImage);
console.log("user data",count.user);
    const getStore = async()=>{
        const getData=await AsyncStorage.getItem('UserData')
        setUserDataStore(JSON.parse(getData))
        console.log("get data",getData)
    }
  return (
    <View style={styles.containter}>
    <>


    <View style={styles.contView}>
     <HeaderSlide source={BACKICON} label={'PROFILE'}  onPress={() => navigation.goBack()} style={{}}/>
      </View>
      {/* <Image
   source= {uri:'data:image/png;base64,' + {this.state.avatar}}
   style={{width: 300, height: 300}}
/> */}

<Image source={{ isStatic: true, uri: (count.user.selectedImage) }} style={styles.profileImg}/>

 {/* <Image source={require(count.user.selectedImage)} style={styles.profileImg}/> */}
    <Text style={styles.profileTxt}>{count.user.username}</Text>
<ScrollView>
    <View style={{margin:10,marginTop:20,padding:16}}>

    <View style={styles.ProView}>
        <Text style={styles.txt}>Date Of Birth :
        <Text style={styles.Protxt}>{moment(count.user.date).format('MM-DD-YYYY')}</Text>
        </Text>
        </View>
        <View style={styles.ProView}>
        <Text style={styles.txt}>Address :
        <Text style={styles.Protxt}>{count.user.address}</Text>
        </Text>
        </View>
        <View style={styles.ProView}>
        
        <Text style={styles.txt}>Phone No :
        <Text style={styles.Protxt}>{count.user.phoneno}</Text>
        </Text>
        </View>

    </View>
</ScrollView>











    {/* {UserDataStore?.map((item)=>{

        return(
<>
            <View style={styles.contView}>
     <HeaderSlide source={BACKICON} label={'PROFILE'}  onPress={() => navigation.goBack()} style={{}}/>
      </View>
<Image source={item.selectedImage} style={styles.profileImg}/>
    <Text style={styles.profileTxt}>{item.username}</Text>
<ScrollView>
    <View style={{margin:10,marginTop:20,padding:16}}>

    <View style={styles.ProView}>
        <Text style={styles.txt}>Date Of Birth :
        <Text style={styles.Protxt}>{moment(item.date).format('YYYY-MM-DD')}</Text>
        </Text>
        </View>
        <View style={styles.ProView}>
        <Text style={styles.txt}>Address :
        <Text style={styles.Protxt}>{item.address}</Text>
        </Text>
        </View>
        <View style={styles.ProView}>
        
        <Text style={styles.txt}>Phone No :
        <Text style={styles.Protxt}>{item.phoneno}</Text>
        </Text>
        </View>

    </View>
</ScrollView>
</>

        )

    })}
         */}
         {/* <Text>DEmo Data</Text>
        
           
                <View>
                <Text style={styles.profileTxt}>{count.user.username}</Text>
                <Text>{count.user.phoneno}</Text>
                </View>
             */}
       
    </> 
        
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({

    containter:{
        flex:1   
    },
    contView:{
        height:'25%',
        backgroundColor:'#fc0349',
        flexDirection:'row',
       
    },
    profileImg:{
        height:150,
        width:150,
         marginTop:-80,
         justifyContent:'center',
         alignSelf:'center',
         borderRadius:75
     },
     profileTxt:{
        justifyContent:'center',
        fontSize:25,
        marginTop:16,
        color:'#fc0349',
        fontWeight:'800',
        textAlign:'center'
    },
    LeftView:{
        width:23,
        height:23,
        marginTop:50,
        marginHorizontal:16,
        tintColor:'#fff'

    },
    profileTxtv:{
        justifyContent:'center',
        fontSize:25,
        color:'#fff',
        fontWeight:'700',
        textAlign:'center',
        marginTop:48,
        marginLeft:90
       
    },
    txt:{
color:'black',
fontWeight:'700',
fontSize:16,
margin:8,
marginRight:10
    },
    Protxt:{
        color:'#7a42f4',
fontWeight:'700',
fontSize:16,
marginLeft:10

    },
    ProView:{
        flexDirection:'row',
        margin:5
    }


})