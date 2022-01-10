import { configureStore } from "@reduxjs/toolkit";
import needyReducer from "./Slice/needySlice";

export const store = configureStore({
  reducer: {
    needy: needyReducer,
  },
});
