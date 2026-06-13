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
  },
});

export const { addRecommendedMovies } = gptRecommendedSlice.actions;
export default gptRecommendedSlice.reducer;
