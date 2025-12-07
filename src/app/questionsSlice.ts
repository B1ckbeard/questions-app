import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionsState {
  filters: string;
  search: string;
}

const initialState: QuestionsState = {
  filters: "",
  search: "",
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
    setSearch: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      state.search = value;
    },
  },
});

export const { setFilters, setSearch } = questionsSlice.actions;

export default questionsSlice.reducer;
