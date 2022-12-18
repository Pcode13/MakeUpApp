import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import MainScreen from '../Screens/MainScreen/MainScreen';
import Profile from '../Screens/slideScreens/Profile';
import ChangePassword from '../Screens/slideScreens/ChangePassword';
import Login from '../Screens/AuthScreen/Login';
import Slidebar from '../Screens/slideScreens/Slidebar';
import HomeScreen from '../Screens/slideScreens/HomeScreen';
import SignUp from '../Screens/AuthScreen/SignUp';
import ProductDetail from '../Screens/BottomTabScreens/ProductDetail';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName=''>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="Slidebar" component={Slidebar} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown:false}} ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})