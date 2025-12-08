import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionsState {
  filters: string;
  currentPage: number;
}

const initialState: QuestionsState = {
  filters: "",
  currentPage: 1,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      state.filters = value;
    },
    resetFilters: (state) => {
      state.filters = "";
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      const value = action.payload;
      state.currentPage = value;
    },
  },
});

export const { setFilters, resetFilters, setCurrentPage } =
  questionsSlice.actions;

export default questionsSlice.reducer;
