import { configureStore, createSlice } from "@reduxjs/toolkit";
import { calculate } from "./calculate";

interface calculateState {
  mainDisplay: string | number;
  subDisplay: string ;
  result: number;
  limit: boolean;
}

const initialState: calculateState = {
  mainDisplay: "0",
  subDisplay: "",
  result: 0,
  limit: false,
};

const listOparator = ["x", "+", "-", "/"];

const calculateSlice = createSlice({
  name: "calculate",
  initialState: initialState,
  reducers: {
    input(state, action) {
      if (state.mainDisplay === "0") {
        state.mainDisplay = action.payload;
      } else {
        if (listOparator.includes(action.payload)) {
          state.mainDisplay = action.payload;
        } else {
          if (listOparator.includes(state.mainDisplay)) {
            state.mainDisplay = action.payload;
          } else if (action.payload === "=") {
            state.result = calculate(state.subDisplay)
            state.mainDisplay = state.result;
          } else {
            state.mainDisplay += action.payload;
          }
        }
      }

      state.subDisplay += action.payload;
      if (state.result > 0) {
        state.subDisplay += state.result;
      }
    },
    clear(state) {
      state.mainDisplay = "0";
      state.subDisplay = "";

      state.result = 0;
      state.limit = false;
    },
  },
});

//store
export const store = configureStore({
  reducer: calculateSlice.reducer,
});

//action
export const actions = calculateSlice.actions;
