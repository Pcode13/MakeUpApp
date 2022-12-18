import axios from 'axios';
import {FAVOURITE,UNFAVOURITE} from './constant'
export const LoginSucess = () => {
    return {
      type: 'LOGIN_SUCCESS',
    }; 
  };
   
  export const LoginFailed = (data) => {
    return {
      type: 'LOGIN_FAILED',
    };
  };
 
  export const signup  = data => {
    return {
      type: "SIGNUP",
      payload:data
    };
  };
   

  export const favourite  = data => {
    console.log("Adding item to fav",data);
   
    return {
      type: FAVOURITE,
      payload:data
      
    };
  };

  export const unfavourite = index => {
    console.log("removing item to fav",index);
    return {
      type: UNFAVOURITE,
      payload:index
      
   };
  };


  export const apiFetchData = data => {
    return  axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
  };