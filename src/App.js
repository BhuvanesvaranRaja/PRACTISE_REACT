import "./App.css";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import ParentHOC from "./Components/HOC/ParentHOC";
import SignUp from "./Components/SignUp";
import StyledComponents from "./Components/StyledComponents";
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
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/HOC" element={<ParentHOC />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/styled" element={<StyledComponents />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
