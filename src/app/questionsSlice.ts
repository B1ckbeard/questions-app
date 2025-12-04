import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionsState {
  filters: string;
}

const initialState: QuestionsState = {
  filters: "",
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
  },
});

export const { setFilters, resetFilters } = questionsSlice.actions;

export default questionsSlice.reducer;
