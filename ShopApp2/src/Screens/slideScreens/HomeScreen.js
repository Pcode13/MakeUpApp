import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const FirstTabBar =require('../../Images/FirstTab.png')
const SecondTabBar =require('../../Images/secondTab.png')
const FirstSelectTabBar =require('../../Images/FirstTabSelect.png')
const SecondSelectTabBar =require('../../Images/secondTabSelect.png')
import axios from 'axios';

import FirstTab from '../BottomTabScreens/FirstTab';
import SecondTab from '../BottomTabScreens/SecondTab';

const Tab = createBottomTabNavigator();


import { useSelector, useDispatch } from 'react-redux';
const HomeScreen = () => {

  const count = useSelector((store) => store.login);
  console.log("store from data",count)

var FavItems= new Map();
FavItems.set("Hello","demo")
  return (
    <Tab.Navigator
    screenOptions={({ route,FavItems}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'FirstTab') {
              iconName = focused
                ?  <Image source={FirstSelectTabBar} style={styles.firstTab} />
                : ( <Image source={FirstTabBar} style={styles.firstTab}/>)
            } else if (route.name === 'SecondTab') {
              iconName = focused ?
              <Image source={SecondSelectTabBar} style={styles.secondTab}/>
                : ( <Image source={SecondTabBar} style={styles.secondTab}/>)
            }

            // You can return any component that you like here!
            
          },
          tabBarActiveTintColor: '#fc0349',
          tabBarInactiveTintColor: 'gray',
        })}
    >
    <Tab.Screen name="FirstTab" component={FirstTab} options={{
        headerShown:false,
        tabBarLabel: 'List',
        tabBarIcon: ({ color ,size}) => (
           <Image source={FirstSelectTabBar} style={{width:25,height:25,tintColor:color}}/>
          ),
    }} />
    <Tab.Screen name="SecondTab" component={SecondTab} options={{
        headerShown:false,
        tabBarLabel: 'Favourite',
        tabBarIcon: ({ color ,size}) => (
           <Image source={SecondTabBar} style={{width:25,height:25,tintColor:color}}/>
          ),
        }}/>
  </Tab.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})