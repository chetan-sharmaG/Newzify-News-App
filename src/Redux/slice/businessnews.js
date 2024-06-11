import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetch_business_news = createAsyncThunk("fetchbusinessnews", async () => {
    const res = await fetch("https://inshorts-news-jr964xyhw-sumanjay.vercel.app/news?category=business");
    const data = await res.json();
    return data.data;
});     



const businessnewsSlice = createSlice({
    name: "businessnews",
    initialState: {
        isloading: false,
        data: [],
        isError: false
    },
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