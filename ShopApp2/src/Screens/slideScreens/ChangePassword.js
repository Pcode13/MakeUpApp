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
 import { useSelector, useDispatch } from 'react-redux';
 
 import {SPLASH_LOGO,BACKICON} from '../../Images/Constant';
 import TextInputWithLabel from '.././slideScreens/compontents/TextInputWithLabel';
 import CustomButton from '.././slideScreens/compontents/CustomButton';
 
 import Validation from '../../Utils/Validation';
 
 const Login = ({navigation}) => {
   const [authState, setAuthState] = useState({
     email: '',
     password: '',
     isSecure: true,
   });
 
   const dispatch = useDispatch();
   const {email, password, isSecure} = authState;
   const updateState = data => setAuthState(() => ({...authState, ...data}));
 

   const onChangePassBtn = () => {
     console.log("change password mmmmmmmmm")
    // dispatch({
    //   type:'SIGNUP',
    //   payload: {
    //     email,
    //     password,
    //     comfirmedpassword
    //   }
    // })
      //  navigation.navigate('MainScreen');
    //  alert("change pasword")
   };
   const count = useSelector(store => store.Loginreducers);
   console.log('Demo data ', count);
 
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
          <Text style={styles.profileTxt}>Change Password</Text>

        </View>
      </View>
 
       <View style={styles.mainView}>
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
              <TextInputWithLabel
             title={'Confirmed Password'}
             placeholder={'Enter your Confirmed  password'}
             //isSecure={isSecure}
             secureTextEntry={isSecure}
             onChangeText={password => updateState({password})}
           />
 
           <CustomButton text="Submit" onPress={()=> navigation.navigate('Profile')} />
         </View>
 
       
       </View>
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
      marginLeft: 45,
      color: '#fff',
      fontWeight: '800',
      textAlign: 'center',
      alignContent: 'center',
      marginBottom: 15,
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
 });
 