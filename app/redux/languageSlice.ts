import { createSlice } from "@reduxjs/toolkit";
import english from "../languages/en.json";
import vietnamese from "../languages/vn.json";

export const languageSlice = createSlice({
    name: "language",
    initialState: {
        value: english
    },
    reducers: {
        setLanguage: (state, action) => {
            switch (action.payload) {
                case "en":
                    state.value = english;
                    break;
                case "vn":
                    state.value = vietnamese;
                    break;
                default:
                    state.value = english;
            }
        }
    }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;