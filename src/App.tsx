import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import theme from "./assets/theme";
import HomePage from "./pages/home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </HashRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
