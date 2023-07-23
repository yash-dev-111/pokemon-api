import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.js";

const store = configureStore({
  reducer: {
    user: userReducer.reducer,
  },
});

export default store;
