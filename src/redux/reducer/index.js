import { combineReducers } from "redux";
import { PictureReducer } from "./PictureReducer";


const reducer = combineReducers(
    {
        PictureReducer :PictureReducer,
    }
)

export default reducer;