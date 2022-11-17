const initialState={
    products:["Hello"],
  };
  
  
  export const PictureReducer=(state=initialState,{type,payload})=>{
      switch(type){
          case "SET_PRODUCT":
              return{...state,products:payload};
          case "REMOVE_PRODUCT":
              return{...state,products:[]};
          default:
              return state;
      }
  }