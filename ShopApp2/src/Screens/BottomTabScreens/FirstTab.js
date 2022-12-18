import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CartItem from '../slideScreens/compontents/CartItem';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {favourite, unfavourite} from '../AuthScreen/Redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {MENU} from '../../Images/Constant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FirstTab = ({navigation, route}) => {
  const items = useSelector(state => state);

  const dispatch = useDispatch();

  console.log('fav item first', items);

  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const getDataAPI = () => {
    axios
      .get(
        'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
      )
      .then(response => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    console.log('APi ', data);
    getDataAPI();
  
  
  }, []);

  const renderItem = ({item, index}) => (
    <>
      <CartItem
        // Favourite={Favourite}
        // setFavourite={setFavourite}
        theme="demo"
        item={item}
        name={item.name}
        uri={item.image_link}
        price={item.price}
        rating={item.rating}
        onPressCart={() => {
          console.log('Presss me', item);
          navigation.navigate('ProductDetail', {selectProductItem: item});
        }}
        addFav={item => {
          // storeFavProduct(item)
          dispatch({
            type: 'FAVOURITE',
            payload: item,
          });
        }}
        unFav={item => {
          // storeunFavProduct(item)
          dispatch({
            type: 'UNFAVOURITE',
            payload: item,
          });
        }}
      />
    </>
  );

  const count = useSelector(store => store.Loginreducers);
  const Pro = useSelector(store => store.FavReducer);
  const product = useSelector(state => state);
  const productDemo = useSelector(store => store);
  console.log('Demo data product', product);
  console.log('Demo data ', count);
  console.log('Demo ', Pro);
  console.log('Demo  prooooo', productDemo);

  const getData = (strKey, callback = response1 => {}) => {
    AsyncStorage.getItem(strKey).then(value => {
      callback(value);
    });
  };

  function storeFavProduct(product = {}) {
    getData('favurite', value => {
      let oldUserData = [];
      if (value) {
        oldUserData = JSON.parse(value);
      }
      AsyncStorage.setItem(
        'favurite',
        JSON.stringify([...oldUserData, product]),
      );
    });
  }

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
        <Text style={styles.headerTxt}>Home Screen</Text>
      </View>

      <SafeAreaView style={styles.container}>
        {isloading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <FlatList
            data={data}
            horizontal
            inverted
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default FirstTab;

const styles = StyleSheet.create({
  mainCon:{flex: 1, alignItems: 'center', backgroundColor: '#fc0349'},
  container: {
    backgroundColor: '#fc0349',
  },
  movieText: {
    fontSize: 26,
    fontWeight: '200',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: '200',
    color: 'green',
  },
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
