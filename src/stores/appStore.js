import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSllice";
import internationalizationReducer from "./languageSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    internationalization: internationalizationReducer,
  },
});

export default appStore;
