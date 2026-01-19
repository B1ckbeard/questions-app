import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number;
  pagesCount: number;
  pageLimit: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  pagesCount: 1,
  pageLimit: 10,
};

export const paginationSlice = createSlice({
  name: "pagination",
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
  paginationSlice.actions;

export default paginationSlice.reducer;
