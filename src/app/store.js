import colorSlice from "../features/color/colorSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    color: colorSlice.reducer,
  },
});
