import constant from './constant';

const initialState = {
  users:[],
  loggeduser:false,
  favProduct:[],
  newPassword:[]
};

export default (state = initialState, action) => {
  console.log("login action",action);
  switch (action.type) {

   

    case 'SIGNUP':
     
      return {
        ...state,
        users:[...state.users,action.payload]
      };

      case 'LOGIN':
        console.log("Signup ",state.users.password)
        return {
          ...state,
          loggeduser:true,
          user:action.payload

        };


        case 'LOGOUT':
          return {
            ...state,
            loggeduser:false,
            user:null
          };

          case 'CHAGEPASSWORD':
            
            return {
              ...state,
              user:[...state.users,action.payload]
            };
            case 'FAVOURITE': 
            // return state
            return {
              ...state,
              favProduct:[...state.favProduct,action.payload]
            };
        
        
            case 'UNFAVOURITE': 
            
              // const unfavouriteArr=state?.favProduct?.filter(item=>
              //    item.id !=action.payload.id
              // );
              // console.log("unfav data",unfavouriteArr);
              return {
                ...state,
                favProduct:state?.favProduct?.filter(item=>
                  item.id !=action.payload.id
               )
              };
       

     
  

    default:
      return state;
  }
};
