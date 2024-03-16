import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(previousTheme => !previousTheme);
  };

  return (
    <div>
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
