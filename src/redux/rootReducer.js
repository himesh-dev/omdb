import { combineReducers } from "@reduxjs/toolkit";
import sliceReducer from "./slice";

const rootReducer = combineReducers({
  slice: sliceReducer,
});

export default rootReducer;
