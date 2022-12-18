import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native'
import React from 'react'
import moment from 'moment'

const ProductDeatilsItem = ({name,brand,uri,price,rating,des,pricesign,category,price_sign,currency,product_type,tag_list,id,created_at,updated_at,uriMore,product_colors,websitelink,product_link,product_api_url}) => {
    var urlRegex =  /^(https?:\/\/[^/]+(\/[\w-]+)+)/;
    var input = {websitelink};

  return (
    <View style={styles.container}>
      <Text style={styles.txtView}>{name}</Text>
      <Text style={styles.txtBrand}>{brand}</Text>
      <Text>{id}</Text>
      
      <View style={{justifyContent:'center',alignItems:'center',marginTop:8}}>
      <Image source={{uri:uri}} style={styles.ImgView}/>
      </View>

      <View style={styles.separator} />
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>

            <Text style={styles.pricetxt}>Price : {price}</Text>
                 <Text style={styles.ratingtxt} >Rating : {rating}</Text>
            </View>
            <Text  style={styles.destitle} >Features</Text>
            <View style={{flexDirection:'row'}}>
            <View style={{width:200,paddingLeft:5,marginTop:5}}>
            <Text style={styles.title}>Category</Text>
            <Text style={styles.title}>Product Type</Text>
            <Text style={styles.title}>Create</Text>
            <Text style={styles.title}>Update </Text>
            
            </View>
           <View style={{width:400,marginLeft:30,marginTop:5}}>

           <Text style={styles.title}>{category} </Text>
           <Text style={styles.title}>{product_type} </Text>
           <Text style={styles.title}>{moment(created_at).format('YYYY-MM-DD')} </Text>
           <Text style={styles.title}>{moment(updated_at).format('YYYY-MM-DD')} </Text>
           <Text style={styles.title}>{websitelink}</Text>
           </View>

            </View>




    

           <Text style={styles.destitle}>Product Colors</Text>
           {product_colors?.map((item)=>{
        return(
            <>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.colorTxt}>{item.hex_value}</Text>
            </View>
           
            
            <Text style={styles.colorTxt}>{item.colour_name}</Text>
            </>
        )
      })}

            <Text  style={styles.destitle} >Description</Text>
            <Text  style={styles.destxt}>{des}</Text>

            <Text  style={styles.destitle}>More Details Links</Text>
            <Text style={styles.linktxt}>Website Link </Text>
            <Text style={styles.title}>{websitelink}</Text>

            <Text style={styles.linktxt}>Product Link </Text>
            <Text style={styles.title}>{product_link}</Text>

            <Text style={styles.linktxt}>Product API URL </Text>
            <Text style={styles.title}>{product_api_url}</Text>
            {/* <View style={{justifyContent:'center',alignItems:'center',marginTop:8}}>
      <Image source={{uri:uriMore}} style={styles.ImgViewMore}/> 
      </View>*/}

     
    
      
    </View>
  )
}

export default ProductDeatilsItem

const styles = StyleSheet.create({
    container:{
        marginHorizontal:16
    },
    txtView:{
        color:'#fc0349',
        fontWeight:'800',
        fontSize:18,
        letterSpacing:1
    },
    txtBrand:{
        marginVertical:3,
        color:'black',
        fontWeight:'500',
        fontSize:16
    },
    ImgView:{
        width:300,
        height:300,
        
        
    },
    separator: {
        height: 2,
        backgroundColor:'#fc0349',
        marginVertical:10,
       
      },
      pricetxt:{
        fontSize:20,
        fontWeight:'700',
       
        color:'black',
    },
    ratingtxt:{
        fontSize:16,
        fontWeight:'600',
        color:'#434ba3',
    },
    destitle:{
        marginTop:5,
        fontSize:18,
        color:'#fc0349',fontWeight:'800',
        letterSpacing:0.5
    },
    destxt:{
        fontSize:15,
      
    },
    title:{
        color:'#000',
        fontSize:16,
        fontWeight:'600',
        marginTop:5
    },
    colorTxt:{
        color:'#7a42f4',
        fontSize:16,
        fontWeight:'600',
        marginTop:5
    },
    ImgViewMore:{
        width:280,
        height:280,
    },
    linktxt:{
        color: '#7a42f4',
        fontSize:20
    }
})