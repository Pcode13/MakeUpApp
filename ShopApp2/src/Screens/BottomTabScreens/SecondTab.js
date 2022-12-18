import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Dimensions
} from 'react-native';
import React, {useState, useEffect} from 'react';
const menu = require('../../Images/menu.png');
import CartItem from '../slideScreens/compontents/CartItem';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import {MENU} from '../../Images/Constant';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import {useSelector, useDispatch} from 'react-redux';
const SecondTab = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [Favourite, setFavourite] = useState([]);

  const myvalue = useSelector(store => store);

  const dispatch = useDispatch();
  console.log('cart item', myvalue.Loginreducers.favProduct);

  useEffect(() => {}, []);

  const renderItem = ({item, index}) => (
    <>
      <CartItem
        Favourite={Favourite}
        setFavourite={setFavourite}
        item={item}
        name={item.name}
        uri={item.image_link}
        addFav={item => {
      
          dispatch({
            type: 'FAVOURITE',
            payload: item,
          });
        }}
        unFav={item => {
          
          dispatch({
            type: 'UNFAVOURITE',
            payload: item,
          });
        }}

    
      />
    </>
  );

  return (
    <View style={styles.mainCon}>
      <View
        style={styles.headers}>
        <TouchableOpacity
          style={{marginLeft: 15}}
          onPress={() => navigation.openDrawer()}>
          <Image
            source={MENU}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Favourite List</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={myvalue?.Loginreducers?.favProduct || []}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default SecondTab;

const styles = StyleSheet.create({
  mainCon:{flex: 1, alignItems: 'center', backgroundColor: '#fc0349'},
  headerTxt: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 15,
    color: '#7a42f4',
  },
  headers:{
    width: windowWidth,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  menuIcon:
  {width: 30, height: 30, tintColor: '#fc0349'}
});
