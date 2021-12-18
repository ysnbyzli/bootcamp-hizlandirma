import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});
