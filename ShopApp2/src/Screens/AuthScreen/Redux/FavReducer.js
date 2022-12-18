// import {FAVOURITE,UNFAVOURITE} from './constant'
// const initialState = [];

//   export default (state =initialState, action) => {
//     switch (action.type) {

//         case 'FAVOURITE': {
//         console.log("Cominf for reducers",action);
//             return[...state,action.payload]
//           };
//           case  'UNFAVOURITE': 
//           {
//             const unfavouriteArr=state.filter((item,index)=>{
//               return item !== action.payload;
//             });
//             return unfavouriteArr;
//           };
      
//           default:
//             return state;
//         }
//     }





import constant from './constant';

const initialState = {
favProduct:[]
  
};

export default (state = initialState, action) => {
  console.log("actionde Fav",action);
  switch (action.type) {


    // case 'FAVOURITE': 
    //   // return state
    //   return{
    //     favProduct:[...state.favProduct,action.payload]
    //   }
    
    // case 'UNFAVOURITE': 
    // {
    //   const unfavouriteArr=state.favProduct.filter((item,index)=>{
    //     return index !=action.payload;
    //   });
    //   return{
    //     favProduct:unfavouriteArr
    //   }
    // };

    default:
      return state;

        
   
     
  
  }
};
