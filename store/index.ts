import { configureStore, createSlice } from "@reduxjs/toolkit";
import { calculate } from "./calculate";

export interface calculateState {
  mainDisplay: string;
  subDisplay: string;
  result: number;
  errorMessage: string;
  error: boolean;
}

const initialState: calculateState = {
  mainDisplay: "0",
  subDisplay: "",
  result: 0,
  errorMessage: "",
  error: false,
};

const listOperator = ["x", "+", "-", "/"];

const calculateSlice = createSlice({
  name: "calculate",
  initialState: initialState,
  reducers: {
    input(state, action) {
      if (state.error) {
        return;
      }
      if (state.mainDisplay === "") {
        if (listOperator.includes(action.payload)) {
          return;
        }
        state.mainDisplay = action.payload;
      } else {
        if (listOperator.includes(action.payload)) {
          state.mainDisplay = action.payload;
        } else {
          if (state.mainDisplay.length > 10) {
            state.error = true;
            state.errorMessage = "Digital limit";
            return;
          }
          if (listOperator.includes(state.mainDisplay as string)) {
            state.mainDisplay = action.payload;
          } else if (action.payload === "=") {
            if (state.subDisplay === "") {
              return;
            }
            if (Number(calculate(state.subDisplay))) {
              if (state.result.toString().length > 10) {
                state.error = true;
                state.errorMessage = "Digital limit";
              } else {
                state.result = calculate(state.subDisplay) as number;
                state.mainDisplay = String(state.result);
                state.subDisplay = "";
              }
            } else {
              if (calculate(state.subDisplay) === 0) {
                state.result = 0;
                state.mainDisplay = String(state.result);
                state.subDisplay = "";
              } else {
                state.error = true;
                state.errorMessage = calculate(state.subDisplay) as string;
              }
            }
            return;
          } else {
            if (state.subDisplay === "") {
              state.mainDisplay = action.payload;
              state.result = 0;
            } else {
              state.mainDisplay += action.payload;
            }
          }
        }
      }
      if (
        listOperator.includes(
          state.subDisplay.charAt(state.subDisplay.length - 1) as string
        )
      ) {
        if (listOperator.includes(action.payload)) {
          let newValue = state.subDisplay.slice(0, -1) + action.payload;
          state.subDisplay = newValue;
        } else {
          if (action.payload === "=") {
            state.result = calculate(state.subDisplay) as number;

            console.log("state.result => ", state.result);
            state.mainDisplay = state.result.toString();
            state.subDisplay = "";
            return;
          }
          state.subDisplay += action.payload;
        }
      } else {
        if (action.payload === "0" && state.subDisplay === "") return;
        if (state.mainDisplay === "") {
          state.subDisplay = action.payload;
        } else {
          if (state.subDisplay === "") {
            state.subDisplay += `${state.result || ""}${action.payload}`;
          } else {
            state.subDisplay += action.payload;
          }
        }
      }
    },
    clear(state) {
      state.mainDisplay = "0";
      state.subDisplay = "";
      state.result = 0;
      state.errorMessage = "";
      state.error = false;
    },
  },
});

//store
export const store = configureStore({
  reducer: calculateSlice.reducer,
});

//action
export const actions = calculateSlice.actions;
