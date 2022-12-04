import { configureStore } from "@reduxjs/toolkit";
import testsSlice from "./reducer/testsSlice";

export const store = configureStore({
  reducer: {
    tests: testsSlice.reducer,
  },
});
