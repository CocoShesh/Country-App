import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(false);

  const handleToggleTheme = () => {
    setToggleTheme((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ handleToggleTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
