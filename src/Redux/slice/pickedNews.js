import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetch_picked_news = createAsyncThunk("fetchpickednews", async () => {
    const res = await fetch("https://inshorts-nrddnp0p3-sumitkolhe.vercel.app/news/topics/EXPLAINERS");
    const data = await res.json();
    return data.data;
});

const pickednewsSlice = createSlice({
    name: "pickednews",
    initialState: {
        isloading:false,
        data: [],
        isError:false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetch_picked_news.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isloading = false;
        }),
        builder.addCase(fetch_picked_news.pending, (state, action) => {
            state.isloading = true;
        }),
        builder.addCase(fetch_picked_news.rejected, (state, action) => {
            state.isError = true;
            console.log("error", action.payload);
        })
    }
});


export default pickednewsSlice.reducer