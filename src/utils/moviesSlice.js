// all movies data will be inside this 
// this data is passed to redux store.

import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState:{
        NowPlayingMovies : null,
        trailerVideo : null,
        popularMovies: null,
        LatestMovies : null,


    },
    reducers: {
        addNowPlayingMovies : (state,action) => {
            state.NowPlayingMovies = action.payload ; 
        },
        addPopularMovies : (state,action) => {
            state.popularMovies = action.payload ; 
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo= action.payload ; 
        },
        addLatestMovies : (state,action) => {
            state.LatestMovies = action.payload ; 
        }
    },
});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addLatestMovies} = moviesSlice.actions;

export default moviesSlice.reducer;