import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "red",
};
export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeToBlue(state) {
      state.value = "blue";
    },
  },
});
export const { changeToBlue } = colorSlice.actions;
export default colorSlice.reducer;
