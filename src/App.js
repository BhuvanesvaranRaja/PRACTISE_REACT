import "./App.css";
import React from "react";
import { ThemeProvider } from "styled-components";
import NavBar from "./Components/NavBar/NavBar";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  const theme = {
    font: {
      primary: "Courier New",
      secondry: "Segoe UI",
    },
    color: {
      primary: "gold",
      secondry: "blue",
      size: "30px",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
