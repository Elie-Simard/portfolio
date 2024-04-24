import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { blueTheme, materialDarkTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = useState(blueTheme);

  const toggleTheme = () => {
    console.log("Toggling theme");
    setTheme(theme === blueTheme ? materialDarkTheme : blueTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={theme} toggleTheme={toggleTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
