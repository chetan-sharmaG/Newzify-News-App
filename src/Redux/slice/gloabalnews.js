import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetch_global_news = createAsyncThunk("fetchglobalnews", async () => {
    const res = await axios.get("https://newzify-backend.vercel.app/");
    // const data = await res.json();
    return res.data;
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
        builder.addCase(fetch_global_news.pending, (state) => {
            state.isloading = true;
        }),
        builder.addCase(fetch_global_news.rejected, (state, action) => {
            state.isError = true;
            console.log("error", action.payload);
        })

    }
});

export default globalnewsSlice.reducer