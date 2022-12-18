import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { NavigationContainer , useIsFocused} from '@react-navigation/native';
import {SPLASH_LOGO} from '../../Images/Constant';
import TextInputWithLabel from '.././slideScreens/compontents/TextInputWithLabel';
import CustomButton from '.././slideScreens/compontents/CustomButton';

import Validation from '../../Utils/Validation';

import { useSelector, useDispatch } from 'react-redux';
import { LoginSucess, LoginFailed, Logout } from './Redux/action';
import { store } from './Redux/store';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import apiFetchData from './Redux/action'

const Login = ({navigation}) => {
  const [authState, setAuthState] = useState({
    email: '',
    password: '',
    isSecure: true,
  });
const isfoused =useIsFocused();
  const {email, password, isSecure} = authState;
  const updateState = data => setAuthState(() => ({...authState, ...data}));
  const dispatch = useDispatch();
  
  const users= useSelector(state => state.users);

  const count = useSelector((store) => store.Loginreducers);
  useEffect(()=>{
    // getStoreData();
   

  },[isfoused])
  const isValidData = () => {
    console.log('Email', email);
    console.log('Password', password);
    const error = Validation({
      email,
      password,
    });
    if (error) {
      alert(error);
      return false;
    }
    return true;
  };

 


  // const getData = (strKey, callback = response1 => {}) => {
  //   AsyncStorage.getItem(strKey).then(value => {
  //     callback(value);
  //   });
  // };
  
  // function storeUserData(userObject={}) {
  //   getData('users', value => {
  //     let oldUserData = []
  //     if (value){
  //       oldUserData = JSON.parse(value);
  //     } 
  //     AsyncStorage.setItem('users', JSON.stringify([...oldUserData, userObject]));
  //   });
  // }



  const savEemailPass = async() =>{
    try{
    await AsyncStorage.setItem('EMAIL',email);
    await AsyncStorage.setItem('PASSWORD',password);
    navigation.navigate('MainScreen');
    console.log("demo emai apsss",email+ " "+ pass);
    }catch(e){
console.log(e);
    }
  }

  const getStoreData = async() =>{
  const userdata= await AsyncStorage.getItem('UserData');
  
    console.log("userdata ",userdata);
    
  }

  const onLoginBtn = () => {
    const checkValid = isValidData();
    
    
    if (checkValid) {

      storeUserData()
      dispatch(LoginSucess())
      navigation.navigate('MainScreen');
    }
  };

  const LoginReduxBtn=()=>{ 

    const checkValid = isValidData();
    console.log("dispatfch Login",dispatch)

    if (checkValid) {
      const payload= count?.users?.find((user) => user.email === email && user.password === password)

      if(payload)
      {
       dispatch({
         type :'LOGIN',
         payload
       })
       alert("Success !!!")
      navigation.navigate('MainScreen')
      }else{
       alert("Wrong Credentail !!!")
      }
    }

 
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.profileTxt}>Login Page</Text>

      <SafeAreaView style={styles.mainView}>
        <Image
          source={SPLASH_LOGO}
          resizeMode="contain"
          style={styles.imageDis}></Image>
        <Text style={styles.textView}>MAYBELLINE</Text>

        <View style={{paddingHorizontal: 16, margin: 5}}>
          <TextInputWithLabel
            title={'Email Id'}
            placeholder={'Enter your email '}
            onChangeText={email => updateState({email})}
          />

          <TextInputWithLabel
            title={'Password'}
            placeholder={'Enter your password'}
            //isSecure={isSecure}
            secureTextEntry={isSecure}
            onChangeText={password => updateState({password})}
          />

          <CustomButton text="Login" onPress={LoginReduxBtn} />
        </View>

        <View style={styles.txtView}>
          <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <Text style={styles.txt}>
              New User? Sign Up
            </Text>
          </TouchableOpacity>
          
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '15%',
    backgroundColor: '#fc0349',
  },
  mainView: {
    height: '65%',
    backgroundColor: '#fff',
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
  },

  profileTxt: {
    justifyContent: 'center',
    fontSize: 25,
    marginTop: 30,
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
    alignContent: 'center',
    marginBottom: 50,
  },
  textView: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fc0349',
    fontWeight: '700',
  },
  imageDis: {
    width: '40%',
    height: '20%',
    borderRadius: 300,
    marginVertical: 10,
    alignSelf: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 2,
    borderRadius: 10,
  },

  txtView: {
    justifyContent:'center',
   alignItems:'center',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  txt: {
    fontWeight: '500',
    fontSize: 16,
    color: '#7a42f4',
  },
});
