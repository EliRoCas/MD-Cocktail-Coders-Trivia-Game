import { configureStore } from "@reduxjs/toolkit";
import cocktailReducer from "./cocktailApiSlice"

const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
  },
});

export default store;
