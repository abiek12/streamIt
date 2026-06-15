import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    clearNowPlayingMovies: (state) => {
      state.nowPlayingMovies = null;
    },
    clearPopularMovies: (state) => {
      state.popularMovies = null;
    },
    clearTopRatedMovies: (state) => {
      state.topRatedMovies = null;
    },
    clearUpComingMovies: (state) => {
      state.upComingMovies = null;
    },
    clearEveryMovies: (state) => {
      state.nowPlayingMovies = null;
      state.popularMovies = null;
      state.topRatedMovies = null;
      state.upComingMovies = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
  clearNowPlayingMovies,
  clearPopularMovies,
  clearTopRatedMovies,
  clearUpComingMovies,
  clearEveryMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
