import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSllice";
import gptRecommendedReducer from "./gptRecommendedSlice";
import internationalizationReducer from "./languageSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gptRecommendedMovies: gptRecommendedReducer,
    internationalization: internationalizationReducer,
  },
});

export default appStore;
