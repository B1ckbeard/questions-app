import { combineReducers } from "@reduxjs/toolkit";
import questionsReducer from "./questionsSlice";
import { questionsApi } from "./questionsApi";
import { skillsApi } from "./skillsApi";
import { specializationsApi } from "./specializationsApi";

export const rootReducer = combineReducers({
  questions: questionsReducer,
  [questionsApi.reducerPath]: questionsApi.reducer,
  [skillsApi.reducerPath]: skillsApi.reducer,
  [specializationsApi.reducerPath]: specializationsApi.reducer,
});
