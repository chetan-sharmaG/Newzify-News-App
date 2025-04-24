import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetch_sports_news = createAsyncThunk("fetchsportsnews", async () => {
    const res = await fetch("https://inshorts-nrddnp0p3-sumitkolhe.vercel.app/news/topics/sports");
    const data = await res.json();
    console.log(data)
    return data.data;
});


const sportsnewsSlice = createSlice({
    name: "sportsnews",
    initialState: {
        isloading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetch_sports_news.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetch_sports_news.fulfilled, (state, action) => {
                state.isloading = false;
                state.data = action.payload;
                state.isError = false;
            })
            .addCase(fetch_sports_news.rejected, (state, action) => {
                state.isloading = false;
                state.isError = true;
                console.log("error", action.payload);
            });
    }
});

export default sportsnewsSlice.reducer