import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DrawerState, DrawerType, DrawerSide } from "./types";

const initialState: DrawerState = {
  isOpen: false,
  type: null,
  side: "right",
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (
      state,
      action: PayloadAction<{
        type: DrawerType;
        side?: DrawerSide;
      }>
    ) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.side = action.payload.side || "right";
    },
    closeDrawer: (state) => {
      state.isOpen = false;
      state.type = null;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
