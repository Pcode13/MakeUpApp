import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { createDrawerNavigator,  DrawerContent,
  DrawerItemList,
  DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TabRouter } from '@react-navigation/native';

import Profile from '../slideScreens/Profile';
import ChangePassword from '../slideScreens/ChangePassword';
import Logout from '../AuthScreen/Login';
import HomeScreen from '../slideScreens/HomeScreen';
import Slidebar from '../slideScreens/Slidebar';

import {Styles} from './MainScreenStyle';

const Drawer = createDrawerNavigator();

const MainScreen = ({theme}) => {

  const {MainContainer}=Styles(theme);
  
  return (
    
    <Drawer.Navigator drawerContent={props => <Slidebar {...props} />} >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
    </Drawer.Navigator>
  
  )
}

export default MainScreen

