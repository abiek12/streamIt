import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    gptRecommendedMovies: null,
    recommendedMoviesResults: null,
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
    addRecommendedMovies: (state, actions) => {
      const { gptRecommendedMovies, recommendedMoviesResults } =
        actions.payload;
      state.gptRecommendedMovies = gptRecommendedMovies;
      state.recommendedMoviesResults = recommendedMoviesResults;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
  addRecommendedMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
