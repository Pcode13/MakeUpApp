import { StyleSheet, Text, View ,Image, Button,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from "axios"
import {
    
    BACKICON,
    
  } from '../../Images/Constant';

  import ProductDeatilsItem from './ProductDeatilsItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
const Data = [
    {
    "id":495,
      "brand":"maybelline",
      "name":"Maybelline Face Studio Master Hi-Light Light Booster Bronzer",
      "price":"14.99",
      "price_sign":null,
      "currency":null,
      "image_link":"https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png",
      "product_link":"https://well.ca/products/maybelline-face-studio-master_88837.html",
      "website_link":"https://well.ca",
      "description":"Maybelline Face Studio Master Hi-Light Light Boosting bronzer formula has an expert \nbalance of shade + shimmer illuminator for natural glow. Skin goes \nsoft-lit with zero glitz.\n\n\t\tFor Best Results: Brush over all shades in palette and gently sweep over \ncheekbones, brow bones, and temples, or anywhere light naturally touches\n the face.\n\n\t\t\n\t\n\n                    ",
      "rating":5.0,
      "category":null,
      "product_type":"bronzer",
      "tag_list":[
         
      ],
      "created_at":"2016-10-01T18:36:15.012Z",
      "updated_at":"2017-12-23T21:08:50.624Z",
      "product_api_url":"https://makeup-api.herokuapp.com/api/v1/products/495.json",
      "api_featured_image":"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/495/original/open-uri20171223-4-9hrto4?1514063330",
      "product_colors":[
         
    ]
    },
]

const ProductDetail = ({route,navigation}) => {
console.log("Product Details",route.params.selectProductItem);
let ProductData =route.params.selectProductItem;
console.log("Product Details demo",ProductData?.product_colors['']);
  return (
    <SafeAreaView style={styles.container} >
<TouchableOpacity onPress={()=>navigation.goBack()}>
<Image source={BACKICON} style={styles.backicon}/>
</TouchableOpacity>

    <ScrollView>
      
<ProductDeatilsItem
    name={ProductData?.name}
    uri={ProductData?.image_link}
    brand={ProductData?.brand}
    price={ProductData?.price}
    rating={ProductData?.rating}
    des={ProductData?.description}
    category={ProductData?.category}
    product_type={ProductData?.product_type}
    pricesign={ProductData?.price_sign}
    currency={ProductData?.currency}
    id={ProductData?.id}
    created_at={ProductData?.created_at}
    updated_at={ProductData?.updated_at}
    uriMore={ProductData?.api_featured_image}
    websitelink={ProductData?.website_link}
    product_colors={ProductData?.product_colors}
    product_api_url={ProductData?.product_api_urls}
    product_link={ProductData?.product_link}

/>
                   
             
        

      
</ScrollView>

    </SafeAreaView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF'
    },
    txtview:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'500',
        textAlign:'left'
    },
    brandtxt:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'500',
        textAlign:'left',
        marginTop:2,
        color:'#fc0349',
        marginBottom:10
    },
    pricetxt:{
        fontSize:25,
        fontWeight:'600',
        margin:5
    },
    backicon:{
        marginTop:10,
        marginLeft:10,
        height:25,
        width:25,
        tintColor:'#000'
       },
})