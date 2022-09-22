import { configureStore, createSlice } from "@reduxjs/toolkit";
import { calculate } from "./calculate";

interface calculateState {
  mainDisplay: string | number;
  subDisplay: string;
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
        // if start process
        state.mainDisplay = action.payload;
        // equal user input
      } else {
        if (listOparator.includes(action.payload)) {
          // check user input is oparator
          state.mainDisplay = action.payload;
        } else {
          if (listOparator.includes(state.mainDisplay as string)) {
            state.mainDisplay = action.payload;
          } else if (action.payload === "=") {
            state.result = calculate(state.subDisplay);
            state.mainDisplay = state.result;
            state.subDisplay = String(state.result);
            return;
          } else {
            state.mainDisplay += action.payload;
          }
        }
      }
      state.subDisplay += action.payload;
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
