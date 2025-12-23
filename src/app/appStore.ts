import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { rootReducer } from "./appReducer";
import { skillApi } from "../entities/skill/api/skillApi";
import { specializationApi } from "../entities/specialization/api/specializationApi";
import { questionApi } from "@/entities/question/api/questionApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(questionApi.middleware)
      .concat(skillApi.middleware)
      .concat(specializationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
