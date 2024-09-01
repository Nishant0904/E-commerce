// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/CounterSlice'; // Import the counterReducer

export const store = configureStore({
    reducer: {
        counter: counterReducer, // Use the imported counterReducer
    },
});
