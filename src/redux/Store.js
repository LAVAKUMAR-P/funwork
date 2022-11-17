import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducer";


const store =configureStore({
    reducer: reducer,
    middleware: [thunk],
    devTools: true,
}

);

export default store;