"use client";
import React from 'react';
import "@styles/globals.css";
import Navbar from '@components/Navbar';
import StoreProvider from './StoreProvider.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@Lib/store/features/theme/themeSlice';

const RootLayout = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  React.useEffect(() => {
    // Load theme from localStorage if available
    const savedTheme = localStorage.getItem('theme') || 'light';
    dispatch(toggleTheme()); // Adjusted to call the correct action
  }, [dispatch]);

  React.useEffect(() => {
    // Apply theme to document body
    document.body.className = theme;
  }, [theme]);

  return (
    <html className='hide-scrollbar' lang='en'>
      <body className='overflow-x-hidden'>
        <main className='app'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
