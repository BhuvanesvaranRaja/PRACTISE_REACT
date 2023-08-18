import "./App.css";
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import NavBar from "./Components/NavBar/NavBar";
import AppRoutes from "./Routes/AppRoutes";
// import Button from "react-bootstrap/Button";

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
      {/* <button>this is bootstrap button</button> */}
    </>
  );
}

export default App;
