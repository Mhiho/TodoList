import React, { createContext, useState } from "react"


const defaultState = {
  light: false
}

export const ThemeContext:any = createContext(defaultState)

export const ThemeProvider = ({ children }:any) => {
    const [light, setLight] = useState<boolean>(false);
    return (
      <ThemeContext.Provider value={{light,setLight}}>
        {children}
      </ThemeContext.Provider>
    );
  };