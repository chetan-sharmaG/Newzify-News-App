import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const miscelleneousnewsSlice = createSlice({
    name: "miscelleneousnews",
    initialState: {
        isloading: false,
        data: [],
        isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetch_miscelleneous_news.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetch_miscelleneous_news.fulfilled, (state, action) => {
                state.isloading = false;
                state.data = action.payload;
                state.isError = false;
            })
            .addCase(fetch_miscelleneous_news.rejected, (state, action) => {
                state.isloading = false;
                state.isError = true;
                console.log("error", action.payload);
            });
    },
});

export const fetch_miscelleneous_news = createAsyncThunk("fetchmiscelleneousnews", async () => {
    const res = await fetch("https://inshorts-news-jr964xyhw-sumanjay.vercel.app/news?category=miscellaneous");
    const data = await res.json();
    return data.data;
});

export default miscelleneousnewsSlice.reducer