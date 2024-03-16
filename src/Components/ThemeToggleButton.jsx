import React from 'react';
import { useTheme } from './ThemeContext';

export default function ThemeToggleButton() {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
      <button onClick={toggleTheme}>
        {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
  )
}
