import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ImageViewer = ({placeholderImageSource,selectedImage,customImg}) => {
    const imageSource = selectedImage !== null ?
    {uri:selectedImage}
    :
    placeholderImageSource;
  return  <Image source={imageSource} style={[styles.image]}/>
}

export default ImageViewer

const styles = StyleSheet.create({
    image:{
    width:90,
    height:90,
    borderRadius:45,
    marginHorizontal:20,
    borderWidth:1
      }
})