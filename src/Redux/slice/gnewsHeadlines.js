import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetch_gnews_headlines = createAsyncThunk("fetchgnewsheadlines", async () => {
    const res = await fetch("https://gnews.io/api/v4/top-headlines?category=general&country=in&apikey=4c7ef8a3799a3258888671664a3f47ce&lang=en");
    const data = await res.json();
    return data.articles;
});


const gnewsheadlinesSlice = createSlice({
    name: "gnewsheadlines",
    initialState: {
        isloading: false,
        data: [],
        isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetch_gnews_headlines.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetch_gnews_headlines.fulfilled, (state, action) => {
                state.isloading = false;
                state.data = action.payload;
            })
            .addCase(fetch_gnews_headlines.rejected, (state) => {
                state.isloading = false;
                state.isError = true;
            });
    }
});

export default gnewsheadlinesSlice.reducer