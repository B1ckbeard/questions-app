import { combineReducers } from "@reduxjs/toolkit";
import { skillApi } from "../entities/skill/api/skillApi";
import { specializationApi } from "../entities/specialization/api/specializationApi";
import paginationReducer from "@/features/pagination/model/slice";
import { questionApi } from "@/entities/question/api/questionApi";

export const rootReducer = combineReducers({
  pagination: paginationReducer,
  [questionApi.reducerPath]: questionApi.reducer,
  [skillApi.reducerPath]: skillApi.reducer,
  [specializationApi.reducerPath]: specializationApi.reducer,
});
