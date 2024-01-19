import counterReducer from "./Counter";
import isLoggedReducer from "./Logged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
});

export default allReducers;
