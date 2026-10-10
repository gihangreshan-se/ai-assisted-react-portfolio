import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContextCore';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'midnight';
  });

  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ id: Date.now(), message, type });
    setTimeout(() => {
      setToast(null);
    }, 3800);
  };

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    const root = document.documentElement;
    root.classList.remove('theme-light', 'theme-dark', 'theme-midnight');
    root.classList.add(`theme-${theme}`);
    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'dark') return 'midnight';
      if (prev === 'midnight') return 'light';
      return 'dark';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, toast, setToast, showToast }}>
      {children}
    </ThemeContext.Provider>
  );
};
