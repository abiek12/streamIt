import { createSlice } from "@reduxjs/toolkit";

const gptRecommendedSlice = createSlice({
  name: "gptRecommendation",
  initialState: {
    gptRecommendedMovies: null,
    recommendedMoviesResults: null,
  },
  reducers: {
    addRecommendedMovies: (state, actions) => {
      const { gptRecommendedMovies, recommendedMoviesResults } =
        actions.payload;
      state.gptRecommendedMovies = gptRecommendedMovies;
      state.recommendedMoviesResults = recommendedMoviesResults;
    },
    clearRecommendedMovies: (state, actions) => {
      state.gptRecommendedMovies = null;
      state.recommendedMoviesResults = null;
    },
  },
});

export const { addRecommendedMovies, clearRecommendedMovies } =
  gptRecommendedSlice.actions;
export default gptRecommendedSlice.reducer;
