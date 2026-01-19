import { combineReducers } from "@reduxjs/toolkit";
import paginationReducer from "@/features/questions-pagination/model/slice";
import drawerReducer from "@/widgets/drawer/model/slice";
import { baseApi } from "@/shared/api/baseApi";

export const rootReducer = combineReducers({
  pagination: paginationReducer,
  drawer: drawerReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
