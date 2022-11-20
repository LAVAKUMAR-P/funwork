const pictireState = {
    AllPicture: [],
    LikedPicture: [],
    DisLikedPicture: [],
    MorePicture: [],
    UpcomingPicture: [],
};


export const PictureReducer = (state = pictireState, { type, payload }) => {
    switch (type) {
        case "SET_ALL_PICTURES":
            return { ...state, AllPicture: [...payload] };
        case "SET_ONE_LIKED_PICTURES":
            return { ...state, LikedPicture: [...state.LikedPicture, payload] };
        case "SET_ONE_DISLIKED_PICTURES":
            return { ...state, DisLikedPicture: [...state.DisLikedPicture, payload] };
        case "SET_ONE_MORE_PICTURES":
            return { ...state, MorePicture : [...state.MorePicture, payload] };
        case "SET_ALLUPCOMMING_PICTURES":
            return { ...state, UpcomingPicture: [...payload] };
        default:
            return state;
    }
}