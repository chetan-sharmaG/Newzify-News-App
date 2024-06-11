import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetch_global_news = createAsyncThunk("fetchglobalnews", async () => {
    const res = await fetch("https://inshorts-news-jr964xyhw-sumanjay.vercel.app/news?category=world");
    const data = await res.json();
    return data.data;
});

const globalnewsSlice = createSlice({
    name: "Globalnews",
    initialState: {
        isloading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder)=>{
        builder.addCase(fetch_global_news.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isloading = false;
        }),
        builder.addCase(fetch_global_news.pending, (state, action) => {
            state.isloading = true;
        }),
        builder.addCase(fetch_global_news.rejected, (state, action) => {
            state.isError = true;
            console.log("error", action.payload);
        })

    }
});

export default globalnewsSlice.reducer