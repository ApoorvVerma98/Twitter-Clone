
import { configureStore } from "@reduxjs/toolkit";
import {userSlice,TweetSlice,LoggedSlice} from "./reducer";






const store = configureStore({
    reducer:{
        user:userSlice.reducer,
        Tweets:TweetSlice.reducer,
        logged:LoggedSlice.reducer,
    }
})



export default store;