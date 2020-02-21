import React, { useContext, useState } from "react";
import { ThemeContext } from "../hoc/ThemeContext";
import { Switch } from "../styles/mainStyle";

const Header = () => {
  const { light, setLight } = useContext(ThemeContext);
  const toggleTheme = () => {
    setLight(!light);
  };

  return (
    <Switch>
      {light ? (
        <button onClick={toggleTheme}>☽</button>
      ) : (
        <button onClick={toggleTheme}>☀</button>
      )}
    </Switch>
  );
};
export default Header;
