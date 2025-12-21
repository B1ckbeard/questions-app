import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionsState {
  currentPage: number;
  pagesCount: number;
  pageLimit: number;
}

const initialState: QuestionsState = {
  currentPage: 1,
  pagesCount: 1,
  pageLimit: 10,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPagesCount: (state, action: PayloadAction<number>) => {
      state.pagesCount = action.payload;
    },
    resetPagination: (state) => {
      state.currentPage = 1;
    },
  },
});

export const { setCurrentPage, setPagesCount, resetPagination } =
  questionsSlice.actions;

export default questionsSlice.reducer;
