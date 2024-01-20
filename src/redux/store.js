import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import shopreducer from "./shopStore";
import userReducer from "./connection";

export default configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopreducer,
    userC: userReducer,
  },
});
