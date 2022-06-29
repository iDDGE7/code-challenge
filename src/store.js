import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer, emojisReducer } from "@state";

// Global Store
const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        emojis: emojisReducer
    }
});

export default store;
