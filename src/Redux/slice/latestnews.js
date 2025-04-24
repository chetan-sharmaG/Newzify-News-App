import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetch_latest_news = createAsyncThunk("fetchlatestnews", async () => {
    const res = await fetch("https://inshorts-nrddnp0p3-sumitkolhe.vercel.app/news/all");
    const data = await res.json();
    return data.data;
});

const initialState = {
    isloading:false,
    data: [],
    isError:false
};

const latestnewsSlice = createSlice({
    name: "news",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetch_latest_news.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isloading = false;
        }),
        builder.addCase(fetch_latest_news.pending, (state, action) => {
            state.isloading = true;
        }),
        builder.addCase(fetch_latest_news.rejected, (state, action) => {
            state.isError = true;
            console.log("error", action.payload);
        })  
    }
});

export default latestnewsSlice.reducer;