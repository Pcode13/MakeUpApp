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
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import * as ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useSelector, useDispatch } from 'react-redux';


import {BACKICON, CALENDAR, USER} from '../../Images/Constant';
import TextInputWithLabel from '.././slideScreens/compontents/TextInputWithLabel';
import CustomButton from '.././slideScreens/compontents/CustomButton';
import ImageViewer from '.././slideScreens/compontents/ImageViewer';
import Validation from '../../Utils/Validation';
let UserData=[];
const SignUp = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch=useDispatch()
  const [authState, setAuthState] = useState({
    username: '',
    email: '',
    phoneno: '',
    address: '',
    password: '',
    comfirmedpassword: '',
    isSecure: true,
    selectedImage: '',
  });

  const {
    email,
    password,
    isSecure,
    username,
    phoneno,
    dob,
    address,
    comfirmedpassword,
  } = authState;
  const updateState = data => setAuthState(() => ({...authState, ...data}
    )
  
  );


   
  const isValidData =  () => {
    const error = Validation({
      email,
      password,
      username,
      phoneno,
      address,
      password,
      comfirmedpassword,
      isSecure: true,
      selectedImage, 
    });
    if (error) {
      alert(error);
      return false;
    } 

    return true;
  };

  const getData = (strKey, callback = response1 => {}) => {
    AsyncStorage.getItem(strKey).then(value => {
      callback(value);
    });
  };
  
  function storeUserData(userObject={}) {
    getData('users', value => {
      let oldUserData = []
      if (value){
        oldUserData = JSON.parse(value);
      } 
      AsyncStorage.setItem('users', JSON.stringify([...oldUserData, userObject]));
    });
  }


  const onLoginBtn = () => {

    const checkValid = isValidData();
 
    if (checkValid) {
      navigation.navigate('Login');
    }
  };



  const SaveSignUp = async()=>{
  //  let  TempData=[];
  //   let demo = JSON.parse(await AsyncStorage.getItem('UserData'));
  //   TempData= demo;
  //  TempData.map((item)=>{
  //   UserData.push(item)
  //  })

   UserData.push({
    username:username,
  email:email,
  phoneno:phoneno,
  date:date,
  address:address,
  password:password,
  comfirmedpassword:comfirmedpassword,
  selectedImage:selectedImage

  })

await AsyncStorage.setItem('UserData',JSON.stringify(UserData));
navigation.navigate('Login')
   
  }

const userSignUp =()=>{
  const checkValid = isValidData();

  if (checkValid) {
    dispatch({
      type:'SIGNUP',
      payload: {
        id:(new Date).getTime(),
        username,
        email,
        phoneno,
        date,
        address,
        password,
        comfirmedpassword,
        selectedImage
      }
    })
    
    navigation.navigate('Login')
  }

 
}




  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 200,
      maxWidth: 200,
    });
    console.log('Image data', result);
    if (!result.canceled) {
      setSelectedImage(result?.assets[0]?.uri);
    } else {
      alert('You did not select any image .');
    }

    UserData.push({
    selectedImage:result
  
    })

    await AsyncStorage.setItem('UserData',JSON.stringify(UserData));
    alert("Sucessfully added")
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 16,
          marginHorizontal: 16,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BACKICON} style={styles.backicon} />
        </TouchableOpacity>

        <View>
          <Text style={styles.profileTxt}>Sign Up</Text>
          <Text style={styles.createTxt}>Create Your Account</Text>
        </View>
      </View>

      <View style={styles.mainView}>
        <Text style={styles.textView}>MAYBELLINE</Text>

        <View style={{alignItems: 'center', marginBottom: 10}}>
          <ImageViewer
            placeholderImageSource={{USER}}
            selectedImage={selectedImage}
          />

          <TouchableOpacity onPress={pickImageAsync}>
            <Text
              style={{
                textAlign: 'center',
                color: '#62e35f',
                fontSize: 15,
                fontWeight: '600',
              }}>
              Upload your Image
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View style={{marginTop:5,marginBottom:10,backgroundColor:'red'}}> */}
          <View
            style={{
              paddingHorizontal: 16,
              margin: 5,
              marginTop: 5,
              marginBottom: 10,
              alignContent: 'center',
            }}>
            <TextInputWithLabel
              title={'Username'}
              placeholder={'Enter your name '}
              onChangeText={username => updateState({username})}
              customStyle={styles.customStyle}
            />

            <TextInputWithLabel
              title={'Email Id'}
              placeholder={'Enter your email '}
              onChangeText={email => updateState({email})}
              customStyle={styles.customStyle}
            />

            <TextInputWithLabel
              title={'Phone No'}
              placeholder={'Enter your Phone No'}
              keyboardType={'numeric'}
              onChangeText={phoneno => updateState({phoneno})}
              customStyle={styles.customStyle}
            />
            <Text style={styles.headerStyle}>{'Date Of Birth'}</Text>
            <TouchableOpacity
              style={styles.dateview}
              onPress={() => setOpen(true)}>
              <Text style={styles.dateTxt}>
                {!isDateSelected
                  ? 'Select Date'
                  : moment(date).format('MM-DD-YYYY')}
              </Text>
              <Image source={CALENDAR} />
            </TouchableOpacity>

            <DatePicker
              mode={'date'}
              modal
              open={open}
              date={date}
              onConfirm={d => {
                setIsDateSelected(true);
                setOpen(false);
                setDate(d);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />

            <TextInputWithLabel
              title={'Address'}
              placeholder={'Enter your Address'}
              multiline={true}
              secureTextEntry={isSecure}
              onChangeText={address => updateState({address})}
              customStyle={styles.customStyle}
            />

            <TextInputWithLabel
              title={'Password'}
              placeholder={'Enter your password'}
              //isSecure={isSecure}
              secureTextEntry={isSecure}
              onChangeText={password => updateState({password})}
              customStyle={styles.customStyle}
            />

            <TextInputWithLabel
              title={'Confirm Password'}
              placeholder={'Enter your Confirm password'}
              //isSecure={isSecure}
              secureTextEntry={isSecure}
              onChangeText={comfirmedpassword =>
                updateState({comfirmedpassword})
              }
              customStyle={styles.customStyle}
            />

            <CustomButton text="SignUp" onPress={userSignUp} />
          </View>
          {/* </View> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '15%',
    backgroundColor: '#fc0349',
  },
  mainView: {
    height: '80%',
    backgroundColor: '#fff',
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    marginBottom: 30,
  },

  profileTxt: {
    justifyContent: 'center',
    fontSize: 25,
    marginLeft: 60,
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
    alignContent: 'center',
    marginBottom: 5,
  },
  createTxt: {
    justifyContent: 'center',
    fontSize: 16,
    marginLeft: 70,
    color: '#fff',
    fontWeight: '400',
    textAlign: 'center',
    alignContent: 'center',
    marginBottom: 10,
  },
  textView: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fc0349',
    fontWeight: '700',
    marginVertical: 5,
  },
  imageDis: {
    width: '30%',
    height: '15%',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  txt: {
    fontWeight: '500',
    fontSize: 14,
    color: '#7a42f4',
  },
  backicon: {
    height: 25,
    width: 25,
    tintColor: '#fff',
  },
  headerStyle: {
    marginTop: 5,
    color: '#7a42f4',
    fontSize: 13,
    fontWeight: 'bold',
  },
  dateview: {
    borderWidth: 2,
    height: 38,
    borderRadius: 8,
    borderColor: '#7a42f4',
    paddingHorizontal: 10,
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
    backgroundColor: 'white',
    width: 280,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: '500',
  },
  customStyle: {
    width: 280,
  },
});
