import { createContext, useState,useContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
      };
    
      const color = theme === "light" ? "#252525" : "#FFF";
      const backgroundColor = theme === "light" ? "#FFF" : "#252525";
    
     
      document.body.style.color = color;
      document.body.style.backgroundColor = backgroundColor;

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}


