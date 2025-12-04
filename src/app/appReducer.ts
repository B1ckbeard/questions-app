import { combineReducers } from "@reduxjs/toolkit";
import questionsReducer from "./questionsSlice";

export const rootReducer = combineReducers({
  questions: questionsReducer,
});
