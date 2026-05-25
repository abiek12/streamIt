import { createSlice } from "@reduxjs/toolkit";
import { LANGUAGES } from "../utils/constants";

const appLanguageSlice = createSlice({
  name: "appLanguage",
  initialState: {
    currentLanguage: LANGUAGES.ENGLISH,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = appLanguageSlice.actions;

export default appLanguageSlice.reducer;
