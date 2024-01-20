import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import shopreducer from "./shopStore";

export default configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopreducer,
  },
});
