import { configureStore } from "@reduxjs/toolkit";
import project from "./components/slice";

export const store = configureStore({
  reducer: { project },
  middleware: [],
});

//типізація для store
export type RootState = ReturnType<typeof store.getState>;
//типізація для dispatch function
export type AppDispatch = typeof store.dispatch;
