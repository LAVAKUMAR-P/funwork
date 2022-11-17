const pictireState={
    Allpictires:[],
    LikedPicture:[],
    DisLikedPicture:[],
    MorePicture:[],
    UpcomingPicture:[],
  };
  
  
  export const PictureReducer=(state=pictireState,{type,payload})=>{
      switch(type){
          case "SET_PRODUCT":
              return{...state,products:payload};
          case "REMOVE_PRODUCT":
              return{...state,products:[]};
          default:
              return state;
      }
  }