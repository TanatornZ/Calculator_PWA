import { configureStore, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { calculate } from "./calculate";

interface calculateState {
  mainDisplay: string;
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
          if (state.mainDisplay.length > 10) {
            state.mainDisplay = "Limit Digit";
            return;
          }
          if (listOparator.includes(state.mainDisplay as string)) {
            state.mainDisplay = action.payload;
          } else if (action.payload === "=") {
            state.result = calculate(state.subDisplay);
            if (state.result > 100000000) {
              state.mainDisplay = "Limit Digit";
              state.subDisplay = "Limit Digit";
            } else {
              state.mainDisplay = String(state.result);
              state.subDisplay = String(state.result);
              state.result = 0;
            }
            return;
          } else {
            state.mainDisplay += action.payload;
          }
        }
      }
      if (
        listOparator.includes(
          state.subDisplay.charAt(state.subDisplay.length - 1) as string
        )
      ) {
        if (listOparator.includes(action.payload)) {
          let newValue = state.subDisplay.slice(0, -1) + action.payload;
          state.subDisplay = newValue;
        } else {
          state.subDisplay += action.payload;
        }
      } else {
        if (action.payload === "0" && state.subDisplay === "") return;
        state.subDisplay += action.payload;
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
