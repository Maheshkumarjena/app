import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../path-to/themeSlice'; // Update with your actual path

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };

  return (
    <div>
      <button onClick={handleThemeToggle}>
        Toggle Theme (Current: {theme})
      </button>
    </div>
  );
};

export default ThemeSwitcher;
