import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import AppNavigator from './src/Navigation/AppNavigator'
import { store } from './src/Screens/AuthScreen/Redux/store';

const App = () => {
  return (
<Provider store={store}>

   <AppNavigator/>
   </Provider>
  )
}

export default App

const styles = StyleSheet.create({})