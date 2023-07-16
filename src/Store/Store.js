import { configureStore } from "@reduxjs/toolkit";
import crudOpersions from "./Slices/crudSlice";
const store = configureStore({
  reducer: {
    crud: crudOpersions
  },
});
export default store;