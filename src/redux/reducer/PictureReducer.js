const pictireState = {
    AllPicture: [],
    LikedPicture: [],
    DisLikedPicture: [],
    MorePicture: [],
    UpcomingPicture: [],
    LovedPicture: [],
};


export const PictureReducer = (state = pictireState, { type, payload }) => {
    switch (type) {
        case "SET_ALL_PICTURES":
            return { ...state, AllPicture: [...payload] };
        case "SET_ONE_LIKED_PICTURE":
            if (!state.LikedPicture.includes(payload)) {
                return { ...state, LikedPicture: [...state.LikedPicture, payload] };
            } else {
                return state;
            }
        case "SET_ONE_DISLIKED_PICTURE":
            if (!state.DisLikedPicture.includes(payload)) {
                return { ...state, DisLikedPicture: [...state.DisLikedPicture, payload] };
            } else {
                return state;
            }
        case "SET_ONE_MORE_PICTURE":
            if (!state.MorePicture.includes(payload)) {
                return { ...state, MorePicture: [...state.MorePicture, payload] };
            } else {
                return state;
            }
        case "SET_ONE_LOVED_PICTURE":
            if (!state.LovedPicture.includes(payload)) {
                return { ...state, LovedPicture: [...state.LovedPicture, payload] };
            } else {
                return state;
            }
        case "SET_ALLUPCOMMING_PICTURES":
            return { ...state, UpcomingPicture: [...payload] };
        default:
            return state;
    }
}