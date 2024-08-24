import { createSlice } from "@reduxjs/toolkit";

const themeSlice= createSlice({
    name:'theme',
    initialState:'light', //Default Theme
    reducers:{
        toggleTheme:(state)=>{
            const newTheme = state === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme); // Save new theme to localStorage
            return newTheme;
        }
    },
})

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;