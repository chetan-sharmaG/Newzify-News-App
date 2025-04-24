import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetch_business_news = createAsyncThunk("fetchbusinessnews", async () => {
    const res = await fetch("https://inshorts-nrddnp0p3-sumitkolhe.vercel.app/news/topics/politics");
    const data = await res.json();
    return data.data;
});     

const initialState = {
    isloading: false,
    data: [],
    isError: false
} 

const businessnewsSlice = createSlice({
    name: "businessnews",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetch_business_news.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isloading = false;
        }),
            builder.addCase(fetch_business_news.pending, (state, action) => {
                state.isloading = true;
            }),
            builder.addCase(fetch_business_news.rejected, (state, action) => {
                state.isError = true;
                console.log("error", action.payload);
            })
    }   
    
});


export default businessnewsSlice.reducer