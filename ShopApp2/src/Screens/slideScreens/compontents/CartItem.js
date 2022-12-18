import { StyleSheet, Text, View ,Image, TouchableOpacity,Button} from 'react-native'
import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {favourite,unfavourite} from '../../AuthScreen/Redux/action'



            
const CartItem = ({name,uri,price,rating,onPressCart,source,item,theme,Favourite,setFavouriten,addFav,unFav}) => {
    
  


    const myvalue=useSelector((store)=>store);
    const product=useSelector(state=>state.favProduct);
    const dispatch = useDispatch();
    console.log("cart item",myvalue.Loginreducers.favProduct)
    console.log("cart item product",product)
    const SwitchButton = Object.freeze({
        FAVOURITE : 'Favourite',
        UNFAVOURITE: 'Unfavourite'
        
      });

      const [selected, setSelected] = useState('');
      const [isfavProduct, setIsFavProduct] = useState(false);
console.log("item ",item);
useEffect(()=>{
    console.log("New value",myvalue?.Loginreducers?.favProduct);

let isFav=false
myvalue?.Loginreducers?.favProduct?.forEach(element => {
    console.log("Emement id",element.id,item.id);
    
    if(element.id === item.id){
       isFav=true
    }

});
setIsFavProduct(isFav)

},[myvalue])

    //   const addFav=(item)=>{
    //     console.log("item data",item)
    //     dispatch(favourite(item))
    //     // setFavourite([...Favourite,item])
    //     // setSelected(SwitchButton.FAVOURITE)
       

    //   }
    //   const removeFav=(index)=>{
    //     dispatch(unfavourite(index))
    //     setSelected(SwitchButton.UNFAVOURITE)
    // }

    
  return (
    <View style={styles.Container}>
    <TouchableOpacity onPress={onPressCart}>
    <View style={styles.MainContainer}>

    <View style={{}} >
    <Image source={{uri:uri}} style={styles.ImageView} resizeMode='cover' />
    </View>

    <View style={styles.separator} />

   <View style={{margin:5}}>
  

            <Text style={styles.title} >{name}</Text>
            {theme ==="demo" ?
            <>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>

            <Text style={styles.pricetxt}>Price : {price}</Text>
                 <Text style={styles.ratingtxt} >Rating : {rating} </Text>
               
                         </View>
                         </>
                         :
                         null}
            
            
            <View style={styles.switchbtn}>

           {!isfavProduct ? 
            <TouchableOpacity
            style={ styles.selectedBtn}
            onPress={()=>{addFav(item)}}
            >
                <Text style={styles.selectedTxt}>FAVOURITE</Text>
            </TouchableOpacity>
           :
            <TouchableOpacity
            style={styles.unSelectedBtn}
            onPress={()=>{unFav(item)}}
            >
                <Text style={styles.unSelectedTxt}>UNFAVOURITE</Text>
            </TouchableOpacity>
           }

            </View>
            
        
   </View>

    </View>
    </TouchableOpacity>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    Container:{
        height:350,
        width:250,
        backgroundColor:'#fff',
       
      marginVertical:16,
      borderBottomRightRadius:35,
      borderTopLeftRadius:35,
      marginHorizontal:16,
      padding:10,
      alignItems:'center'
    },
    MainContainer:{
    

    },
    ImageView:{
        height:170,
        width:180,
        margin:5 ,
       alignItems:'center',
    },
    title:{
        fontSize:15,
        fontWeight:'800',
        color:'#7a42f4',
        flexWrap: 'wrap',
      
    },
    pricetxt:{
        fontSize:16,
        fontWeight:'700',
       
        color:'black',
    },
    ratingtxt:{
        fontSize:14,
        fontWeight:'600',
        color:'black',
    },
    switchbtn:{
       
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 2,
        justifyContent: 'center',
        width:230,
        height:40,
        alignItems:'center',
        borderRadius:10,
        marginTop:9,
        
    },
    selectedBtn:{
        backgroundColor:'#25A140',
      
        borderRadius:10,
        width:130,
        height:33,
      
        alignItems: 'center',
        justifyContent: 'center',
    },
    unSelectedBtn:{
        backgroundColor:'gray',
       
        borderRadius:10,
        width:130,
        height:33,
    
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedTxt:{ 
        color:'#fff',
        fontWeight:'600',
        padding:2,
        letterSpacing: -0.24,
        fontSize:16
    },
    unSelectedTxt:{
        fontWeight:'500',
        padding:2,
        letterSpacing: -0.24,
        color:'#fff'
    },

  
    separator: {
        height: 2,
        backgroundColor:'#fc0349',
        marginVertical:10,
       
      },
})