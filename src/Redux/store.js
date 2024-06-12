import {configureStore} from "@reduxjs/toolkit";
import latestReducer from "./slice/latestnews"
import globalnewsReducer from "./slice/gloabalnews"
import pickednewsReducer from "./slice/pickedNews"
import businessnewsReducer from "./slice/businessnews"
import sportsnewsReducer from "./slice/sportsnews"
import miscelleneousnewsReducer from "./slice/miscelleneousnews"
import gnewsHeadlinesReducer from "./slice/gnewsHeadlines"

export const store  = configureStore({
    reducer:{
        latestnews:latestReducer,
        globalnews:globalnewsReducer,
        pickednews:pickednewsReducer,
        businessnews:businessnewsReducer,
        sportnews:sportsnewsReducer,
        miscelleneousnews:miscelleneousnewsReducer,
        gnews:gnewsHeadlinesReducer
    }
});

