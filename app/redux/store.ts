import { configureStore } from '@reduxjs/toolkit'
import languageSlice from './languageSlice'
import themeSlice from './themeSlice';

export const store = configureStore({
    reducer: {
        language: languageSlice,
        theme: themeSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch