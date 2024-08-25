"use client"
import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: getInitialTheme(), // Use the saved theme or default to light
    reducers: {
        toggleTheme: (state) => {
            const newTheme = state === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme); // Save new theme to localStorage
            return newTheme;
        }
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
